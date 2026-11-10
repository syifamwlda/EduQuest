import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import confetti from 'canvas-confetti';
import {
  UserProfile,
  LearningMaterial,
  QuizQuestion,
  CommunityPost,
  Badge,
  SubjectType,
  LeaderboardUser,
  DailyQuestItem,
  UserActivityLog
} from '../types';
import { demoProfiles } from '../data/demoUsers';
import { englishMaterials } from '../data/englishMaterials';
import { mathMaterials } from '../data/mathMaterials';
import { quizQuestions as defaultQuizzes } from '../data/quizQuestions';
import { initialBadges } from '../data/badges';
import { initialCommunityPosts } from '../data/initialCommunity';
import { soundFX } from '../utils/soundEffects';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'xp' | 'badge';
  xpAmount?: number;
}

interface EduQuestContextType {
  currentUser: UserProfile;
  allUsers: UserProfile[];
  materials: LearningMaterial[];
  quizzes: QuizQuestion[];
  badges: Badge[];
  communityPosts: CommunityPost[];
  activeTab: string;
  selectedMaterialId: string | null;
  activeGameId: string | null;
  searchQuery: string;
  toasts: ToastMessage[];
  isAdmin: boolean;
  levelUpModalData: { level: number; xp: number } | null;
  
  // Navigation & UI controls
  setActiveTab: (tab: string) => void;
  openMaterialDetail: (id: string) => void;
  openGame: (gameId: string) => void;
  setSearchQuery: (query: string) => void;
  toggleAdminMode: () => void;
  closeLevelUpModal: () => void;
  showToast: (title: string, message: string, type?: ToastMessage['type'], xpAmount?: number) => void;
  removeToast: (id: string) => void;
  
  // User & Demo switching
  switchDemoUser: (userId: string) => void;
  updateCurrentUserProfile: (updatedData: Partial<UserProfile>) => void;
  
  // Learning & Gamification Actions
  awardXP: (amount: number, reason: string, subject?: SubjectType | 'system', type?: UserActivityLog['type'], score?: number) => void;
  markLessonCompleted: (materialId: string) => void;
  recordQuizCompleted: (quizId: string, earnedXp: number) => void;
  recordGamePlayed: (gameId: string, score: number, xpEarned: number) => void;
  toggleBookmark: (materialId: string) => void;
  claimDailyQuest: (questId: string, xpAmount: number) => void;
  
  // Community Actions
  togglePostLike: (postId: string) => void;
  togglePostBookmark: (postId: string) => void;
  addCommunityPost: (post: Omit<CommunityPost, 'id' | 'likes' | 'likedByUser' | 'bookmarkedByUser' | 'createdAt' | 'commentCount'>) => void;
  
  // Admin Data CRUD
  addMaterial: (material: LearningMaterial) => void;
  updateMaterial: (material: LearningMaterial) => void;
  deleteMaterial: (id: string) => void;
  addQuiz: (quiz: QuizQuestion) => void;
  updateQuiz: (quiz: QuizQuestion) => void;
  deleteQuiz: (id: string) => void;
  deleteCommunityPost: (postId: string) => void;
  
  // Helpers
  getLeaderboard: (timeframe: 'weekly' | 'monthly' | 'all-time') => LeaderboardUser[];
  triggerConfetti: () => void;
}

const EduQuestContext = createContext<EduQuestContextType | undefined>(undefined);

const LOCAL_STORAGE_KEYS = {
  USER_PROFILES: 'eduquest_user_profiles_v1',
  ACTIVE_USER_ID: 'eduquest_active_user_id_v1',
  MATERIALS: 'eduquest_materials_v1',
  QUIZZES: 'eduquest_quizzes_v1',
  COMMUNITY: 'eduquest_community_v1',
  BADGES: 'eduquest_badges_v1'
};

export const EduQuestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Initial State from LocalStorage or Defaults
  const [allUsers, setAllUsers] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_PROFILES);
    return saved ? JSON.parse(saved) : demoProfiles;
  });

  const [activeUserId, setActiveUserId] = useState<string>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.ACTIVE_USER_ID);
    return saved || 'demo-user-1';
  });

  const [materials, setMaterials] = useState<LearningMaterial[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.MATERIALS);
    return saved ? JSON.parse(saved) : [...englishMaterials, ...mathMaterials];
  });

  const [quizzes, setQuizzes] = useState<QuizQuestion[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.QUIZZES);
    return saved ? JSON.parse(saved) : defaultQuizzes;
  });

  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.COMMUNITY);
    return saved ? JSON.parse(saved) : initialCommunityPosts;
  });

  const [badges] = useState<Badge[]>(initialBadges);

  // UI state
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(null);
  const [activeGameId, setActiveGameId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [levelUpModalData, setLevelUpModalData] = useState<{ level: number; xp: number } | null>(null);

  // Sync to LocalStorage on updates
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER_PROFILES, JSON.stringify(allUsers));
  }, [allUsers]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACTIVE_USER_ID, activeUserId);
  }, [activeUserId]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.MATERIALS, JSON.stringify(materials));
  }, [materials]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.QUIZZES, JSON.stringify(quizzes));
  }, [quizzes]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.COMMUNITY, JSON.stringify(communityPosts));
  }, [communityPosts]);

  // Current active user
  const currentUser = allUsers.find(u => u.id === activeUserId) || allUsers[0] || demoProfiles[0];

  // Helper Confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback if canvas confetti fails in unsupported environment
    }
  };

  // Toast Helpers
  const showToast = (title: string, message: string, type: ToastMessage['type'] = 'info', xpAmount?: number) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, title, message, type, xpAmount }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Switch demo user
  const switchDemoUser = (userId: string) => {
    const found = allUsers.find(u => u.id === userId);
    if (found) {
      setActiveUserId(userId);
      showToast('Profil Diperbarui', `Beralih ke akun siswa demo: ${found.name}`, 'info');
    }
  };

  // Update profile
  const updateCurrentUserProfile = (updatedData: Partial<UserProfile>) => {
    setAllUsers(prev => prev.map(u => {
      if (u.id === currentUser.id) {
        return { ...u, ...updatedData };
      }
      return u;
    }));
    showToast('Profil Disimpan', 'Data profil belajarmu telah berhasil diperbarui.', 'success');
  };

  // Check and unlock badges
  const checkBadgeUnlocks = (user: UserProfile, newXp: number, newLevel: number): UserProfile => {
    const updatedBadges = user.badges.map(b => {
      if (b.unlocked) return b;
      let shouldUnlock = false;

      if (b.badgeId === 'first-explorer' && user.completedLessons.length >= 1) {
        shouldUnlock = true;
      } else if (b.badgeId === 'word-wizard' && b.currentCount >= 20) {
        shouldUnlock = true;
      } else if (b.badgeId === 'grammar-hero' && b.currentCount >= 10) {
        shouldUnlock = true;
      } else if (b.badgeId === 'math-genius' && b.currentCount >= 20) {
        shouldUnlock = true;
      } else if (b.badgeId === 'daily-champion' && b.currentCount >= 5) {
        shouldUnlock = true;
      } else if (b.badgeId === 'consistent-learner' && user.currentStreak >= 7) {
        shouldUnlock = true;
      } else if (b.badgeId === 'quest-master' && b.currentCount >= 20) {
        shouldUnlock = true;
      } else if (b.badgeId === 'smk-trailblazer' && newLevel >= 5) {
        shouldUnlock = true;
      }

      if (shouldUnlock) {
        const badgeDef = badges.find(bg => bg.id === b.badgeId);
        showToast('Lencana Terbuka! 🏆', `Selamat! Kamu membuka lencana "${badgeDef?.title || b.badgeId}"!`, 'badge', badgeDef?.xpBonus);
        triggerConfetti();
        return {
          ...b,
          unlocked: true,
          unlockedAt: new Date().toISOString().split('T')[0]
        };
      }
      return b;
    });

    return {
      ...user,
      badges: updatedBadges
    };
  };

  // Award XP with level calculation & streak update
  const awardXP = (
    amount: number,
    reason: string,
    subject: SubjectType | 'system' = 'system',
    type: UserActivityLog['type'] = 'lesson',
    score?: number
  ) => {
    setAllUsers(prev => prev.map(u => {
      if (u.id !== currentUser.id) return u;

      const newXP = u.xp + amount;
      // Level progression: 250 XP per level
      const currentLevel = u.level;
      const newLevel = Math.max(1, Math.floor(newXP / 250) + 1);

      // Streak calculation (increase once per calendar day)
      const today = new Date().toISOString().split('T')[0];
      let newStreak = u.currentStreak;
      let newLongest = u.longestStreak;

      if (u.lastActiveDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (u.lastActiveDate === yesterdayStr) {
          newStreak += 1;
        } else if (!u.lastActiveDate) {
          newStreak = 1;
        } else {
          // Streak reset if missed a day, unless today was already registered
          newStreak = 1;
        }

        if (newStreak > newLongest) {
          newLongest = newStreak;
        }
      }

      // Activity log
      const newActivity: UserActivityLog = {
        id: 'act-' + Date.now().toString(),
        timestamp: new Date().toLocaleDateString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        title: reason,
        subject,
        type,
        xpEarned: amount,
        score
      };

      let updatedUser: UserProfile = {
        ...u,
        xp: newXP,
        level: newLevel,
        currentStreak: newStreak,
        longestStreak: newLongest,
        lastActiveDate: today,
        activityHistory: [newActivity, ...u.activityHistory.slice(0, 24)]
      };

      // Check level up event
      if (newLevel > currentLevel) {
        setLevelUpModalData({ level: newLevel, xp: newXP });
        triggerConfetti();
        soundFX.playLevelUp();
      }

      // Check badge unlocks
      updatedUser = checkBadgeUnlocks(updatedUser, newXP, newLevel);

      return updatedUser;
    }));

    showToast(`+${amount} XP Didapatkan!`, reason, 'xp', amount);
  };

  // Mark lesson as completed
  const markLessonCompleted = (materialId: string) => {
    if (currentUser.completedLessons.includes(materialId)) {
      showToast('Sudah Selesai', 'Kamu sudah pernah menyelesaikan modul ini sebelumnya.', 'info');
      return;
    }

    const material = materials.find(m => m.id === materialId);
    const xpReward = material?.xpReward || 50;

    setAllUsers(prev => prev.map(u => {
      if (u.id === currentUser.id) {
        return {
          ...u,
          completedLessons: [...u.completedLessons, materialId]
        };
      }
      return u;
    }));

    awardXP(xpReward, `Menyelesaikan Modul: ${material?.title || 'Pembelajaran'}`, material?.subject || 'system', 'lesson');
    triggerConfetti();
  };

  // Record completed quiz
  const recordQuizCompleted = (quizId: string, earnedXp: number) => {
    const isFirstTime = !currentUser.completedQuizzes.includes(quizId);
    
    setAllUsers(prev => prev.map(u => {
      if (u.id === currentUser.id) {
        const nextQuizzes = isFirstTime ? [...u.completedQuizzes, quizId] : u.completedQuizzes;
        // update badge counters
        const quizObj = quizzes.find(q => q.id === quizId);
        const updatedBadges = u.badges.map(b => {
          if (quizObj?.subject === 'english' && b.badgeId === 'word-wizard') {
            return { ...b, currentCount: b.currentCount + 1 };
          }
          if (quizObj?.subject === 'english' && b.badgeId === 'grammar-hero' && quizObj.category.includes('Grammar')) {
            return { ...b, currentCount: b.currentCount + 1 };
          }
          if (quizObj?.subject === 'mathematics' && b.badgeId === 'math-genius') {
            return { ...b, currentCount: b.currentCount + 1 };
          }
          return b;
        });

        return {
          ...u,
          completedQuizzes: nextQuizzes,
          badges: updatedBadges
        };
      }
      return u;
    }));

    if (earnedXp > 0) {
      awardXP(earnedXp, `Menjawab Benar Kuis: ${quizId}`, 'system', 'quiz');
    }
  };

  // Record Game
  const recordGamePlayed = (gameId: string, score: number, xpEarned: number) => {
    setAllUsers(prev => prev.map(u => {
      if (u.id === currentUser.id) {
        const prevHighScore = u.gameHighScores[gameId] || 0;
        const newHighScore = Math.max(prevHighScore, score);
        
        // update quest master badge count
        const updatedBadges = u.badges.map(b => {
          if (b.badgeId === 'quest-master') {
            return { ...b, currentCount: b.currentCount + 1 };
          }
          return b;
        });

        return {
          ...u,
          gameHighScores: {
            ...u.gameHighScores,
            [gameId]: newHighScore
          },
          badges: updatedBadges
        };
      }
      return u;
    }));

    awardXP(xpEarned, `Menyelesaikan Game: ${gameId}`, 'system', 'game', score);
    triggerConfetti();
  };

  // Toggle Material Bookmark
  const toggleBookmark = (materialId: string) => {
    setAllUsers(prev => prev.map(u => {
      if (u.id === currentUser.id) {
        const exists = u.bookmarkedMaterials.includes(materialId);
        const updated = exists 
          ? u.bookmarkedMaterials.filter(id => id !== materialId)
          : [...u.bookmarkedMaterials, materialId];
        return { ...u, bookmarkedMaterials: updated };
      }
      return u;
    }));

    const isBookmarked = !currentUser.bookmarkedMaterials.includes(materialId);
    showToast(
      isBookmarked ? 'Disimpan ke Bookmark' : 'Dihapus dari Bookmark',
      isBookmarked ? 'Modul materi ditambahkan ke daftar belajar favorit.' : 'Modul materi dihapus dari favorit.',
      'info'
    );
  };

  // Claim Daily Quest
  const claimDailyQuest = (questId: string, xpAmount: number) => {
    const today = new Date().toISOString().split('T')[0];
    const claimedList = currentUser.dailyQuestProgress.claimedQuestIds || [];

    if (claimedList.includes(questId)) {
      showToast('Sudah Diklaim', 'Reward misi harian ini sudah kamu klaim hari ini.', 'info');
      return;
    }

    setAllUsers(prev => prev.map(u => {
      if (u.id === currentUser.id) {
        const updatedClaimed = [...(u.dailyQuestProgress.claimedQuestIds || []), questId];
        
        // increment daily champion badge
        const updatedBadges = u.badges.map(b => {
          if (b.badgeId === 'daily-champion') {
            return { ...b, currentCount: b.currentCount + 1 };
          }
          return b;
        });

        return {
          ...u,
          badges: updatedBadges,
          dailyQuestProgress: {
            lastDate: today,
            claimedQuestIds: updatedClaimed
          }
        };
      }
      return u;
    }));

    awardXP(xpAmount, 'Menyelesaikan Misi Harian EduQuest', 'system', 'quest');
    triggerConfetti();
  };

  // Community likes and bookmarks
  const togglePostLike = (postId: string) => {
    setCommunityPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const nextLiked = !p.likedByUser;
        return {
          ...p,
          likedByUser: nextLiked,
          likes: nextLiked ? p.likes + 1 : p.likes - 1
        };
      }
      return p;
    }));
  };

  const togglePostBookmark = (postId: string) => {
    setCommunityPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const nextBm = !p.bookmarkedByUser;
        return {
          ...p,
          bookmarkedByUser: nextBm
        };
      }
      return p;
    }));
  };

  const addCommunityPost = (postData: Omit<CommunityPost, 'id' | 'likes' | 'likedByUser' | 'bookmarkedByUser' | 'createdAt' | 'commentCount'>) => {
    const newPost: CommunityPost = {
      ...postData,
      id: 'post-' + Date.now().toString(),
      likes: 0,
      likedByUser: false,
      bookmarkedByUser: false,
      createdAt: new Date().toISOString(),
      commentCount: 0
    };

    setCommunityPosts(prev => [newPost, ...prev]);
    awardXP(30, 'Membagikan Catatan Belajar di Komunitas', postData.subject, 'lesson');
    showToast('Catatan Diterbitkan! 🎉', 'Catatan belajarmu telah dibagikan ke siswa SMK lainnya.', 'success');
  };

  const deleteCommunityPost = (postId: string) => {
    setCommunityPosts(prev => prev.filter(p => p.id !== postId));
    showToast('Post Dihapus', 'Kiriman komunitas berhasil dihapus oleh admin.', 'info');
  };

  // Admin Material CRUD
  const addMaterial = (material: LearningMaterial) => {
    setMaterials(prev => [material, ...prev]);
    showToast('Modul Ditambahkan', `Materi "${material.title}" berhasil dibuat.`, 'success');
  };

  const updateMaterial = (material: LearningMaterial) => {
    setMaterials(prev => prev.map(m => m.id === material.id ? material : m));
    showToast('Modul Diperbarui', `Perubahan pada "${material.title}" telah disimpan.`, 'success');
  };

  const deleteMaterial = (id: string) => {
    setMaterials(prev => prev.filter(m => m.id !== id));
    showToast('Modul Dihapus', 'Materi telah dihapus dari sistem prototype.', 'info');
  };

  // Admin Quiz CRUD
  const addQuiz = (quiz: QuizQuestion) => {
    setQuizzes(prev => [quiz, ...prev]);
    showToast('Kuis Ditambahkan', 'Soal kuis baru berhasil disimpan ke bank soal.', 'success');
  };

  const updateQuiz = (quiz: QuizQuestion) => {
    setQuizzes(prev => prev.map(q => q.id === quiz.id ? quiz : q));
    showToast('Kuis Diperbarui', 'Soal kuis berhasil dimodifikasi.', 'success');
  };

  const deleteQuiz = (id: string) => {
    setQuizzes(prev => prev.filter(q => q.id !== id));
    showToast('Kuis Dihapus', 'Soal kuis telah dihapus dari bank soal.', 'info');
  };

  // Leaderboard Calculation
  const getLeaderboard = (timeframe: 'weekly' | 'monthly' | 'all-time'): LeaderboardUser[] => {
    // Generate ranked list based on XP, highlighting current user
    const sorted = [...allUsers].sort((a, b) => {
      if (timeframe === 'weekly') return (b.xp % 400) - (a.xp % 400);
      if (timeframe === 'monthly') return (b.xp % 800) - (a.xp % 800);
      return b.xp - a.xp;
    });

    return sorted.map((user, index) => ({
      id: user.id,
      rank: index + 1,
      name: user.name,
      school: user.school,
      major: user.major,
      avatar: user.avatar,
      xp: timeframe === 'weekly' ? Math.floor(user.xp * 0.4) : timeframe === 'monthly' ? Math.floor(user.xp * 0.75) : user.xp,
      level: user.level,
      streak: user.currentStreak,
      isCurrentUser: user.id === currentUser.id
    }));
  };

  // Open Material Detail
  const openMaterialDetail = (id: string) => {
    setSelectedMaterialId(id);
    setActiveTab('material-detail');
  };

  // Open Game
  const openGame = (gameId: string) => {
    setActiveGameId(gameId);
    setActiveTab('interactive-games');
  };

  const toggleAdminMode = () => {
    setIsAdmin(prev => !prev);
  };

  const closeLevelUpModal = () => {
    setLevelUpModalData(null);
  };

  return (
    <EduQuestContext.Provider
      value={{
        currentUser,
        allUsers,
        materials,
        quizzes,
        badges,
        communityPosts,
        activeTab,
        selectedMaterialId,
        activeGameId,
        searchQuery,
        toasts,
        isAdmin,
        levelUpModalData,
        setActiveTab,
        openMaterialDetail,
        openGame,
        setSearchQuery,
        toggleAdminMode,
        closeLevelUpModal,
        showToast,
        removeToast,
        switchDemoUser,
        updateCurrentUserProfile,
        awardXP,
        markLessonCompleted,
        recordQuizCompleted,
        recordGamePlayed,
        toggleBookmark,
        claimDailyQuest,
        togglePostLike,
        togglePostBookmark,
        addCommunityPost,
        deleteCommunityPost,
        addMaterial,
        updateMaterial,
        deleteMaterial,
        addQuiz,
        updateQuiz,
        deleteQuiz,
        getLeaderboard,
        triggerConfetti
      }}
    >
      {children}
    </EduQuestContext.Provider>
  );
};

export const useEduQuest = () => {
  const context = useContext(EduQuestContext);
  if (!context) {
    throw new Error('useEduQuest must be used within an EduQuestProvider');
  }
  return context;
};

