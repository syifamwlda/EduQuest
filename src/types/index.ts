export type SubjectType = 'english' | 'mathematics';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint?: string;
}

export interface MaterialSection {
  title: string;
  content: string;
  formula?: string;
  steps?: string[];
  example?: {
    question: string;
    solution: string;
    notes?: string;
  };
  vocabulary?: {
    term: string;
    meaning: string;
    context: string;
    pronunciation?: string;
  }[];
  dialogue?: {
    speaker: string;
    text: string;
    translation: string;
  }[];
  keyPoints?: string[];
}

export interface LearningMaterial {
  id: string;
  subject: SubjectType;
  category: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  estimatedMinutes: number;
  xpReward: number;
  iconName?: string;
  objectives: string[];
  introduction: string;
  sections: MaterialSection[];
  practiceQuestions: PracticeQuestion[];
  summary: string[];
  relatedIds: string[];
}

export interface QuizQuestion {
  id: string;
  subject: SubjectType;
  category: string;
  topic: string;
  difficulty: DifficultyLevel;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xpReward: number;
}

export interface DailyQuestItem {
  id: string;
  subject: SubjectType | 'mixed';
  title: string;
  description: string;
  targetType: 'lesson' | 'quiz' | 'game' | 'score';
  targetCount: number;
  currentCount: number;
  xpReward: number;
  completed: boolean;
  claimed: boolean;
  taskQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface DailyQuestData {
  date: string; // YYYY-MM-DD
  englishChallenge: DailyQuestItem;
  mathChallenge: DailyQuestItem;
  bonusMission: DailyQuestItem;
}

export interface Badge {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: 'learning' | 'streak' | 'game' | 'mastery';
  conditionDescription: string;
  requiredCount: number;
  xpBonus: number;
}

export interface UserBadgeProgress {
  badgeId: string;
  currentCount: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface UserActivityLog {
  id: string;
  timestamp: string;
  title: string;
  subject: SubjectType | 'system';
  type: 'lesson' | 'quiz' | 'game' | 'badge' | 'quest';
  xpEarned: number;
  score?: number;
}

export interface UserProfile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  school: string;
  grade: string;
  major: string; // e.g. "Rekayasa Perangkat Lunak (RPL)", "Teknik Komputer & Jaringan (TKJ)", "Teknik Otomotif"
  bio: string;
  xp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  completedLessons: string[]; // Material IDs
  completedQuizzes: string[]; // Quiz IDs
  bookmarkedMaterials: string[];
  badges: UserBadgeProgress[];
  gameHighScores: Record<string, number>;
  activityHistory: UserActivityLog[];
  dailyQuestProgress: {
    lastDate: string;
    claimedQuestIds: string[];
  };
}

export interface CommunityPost {
  id: string;
  authorId: string;
  authorName: string;
  authorMajor: string;
  authorAvatar: string;
  subject: SubjectType;
  title: string;
  content: string;
  tags: string[];
  formulaOrCode?: string;
  likes: number;
  likedByUser: boolean;
  bookmarkedByUser: boolean;
  createdAt: string;
  commentCount: number;
}

export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  school: string;
  major: string;
  avatar: string;
  xp: number;
  level: number;
  streak: number;
  isCurrentUser?: boolean;
}

export type GameMode = 
  | 'vocab-hunter' 
  | 'grammar-battle' 
  | 'word-match' 
  | 'reading-detective' 
  | 'math-speed' 
  | 'formula-master' 
  | 'math-puzzle' 
  | 'arrange-sentence' 
  | 'equation-solver' 
  | 'mixed-challenge';

export interface GameDefinition {
  id: GameMode;
  title: string;
  subject: SubjectType | 'mixed';
  tagline: string;
  description: string;
  icon: string;
  badgeColor: string;
  difficulty: DifficultyLevel;
  durationMinutes: number;
  xpBase: number;
}

