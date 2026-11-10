import { UserProfile } from '../types';

export const demoProfiles: UserProfile[] = [
  {
    id: 'demo-user-1',
    name: 'Raditya Pratama',
    username: 'raditya_rpl',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    school: 'SMKN 1 Cimahi',
    grade: 'Kelas XI',
    major: 'Rekayasa Perangkat Lunak (RPL)',
    bio: 'Siswa SMK yang gemar coding frontend, logika matematika aljabar, dan bahasa Inggris teknis.',
    xp: 680,
    level: 3,
    currentStreak: 5,
    longestStreak: 9,
    lastActiveDate: '2026-11-10',
    completedLessons: ['eng-01', 'eng-02', 'mat-01', 'mat-02'],
    completedQuizzes: ['eq-01', 'eq-03', 'mq-01', 'mq-02'],
    bookmarkedMaterials: ['eng-05', 'mat-07'],
    badges: [
      { badgeId: 'first-explorer', currentCount: 4, unlocked: true, unlockedAt: '2026-11-06' },
      { badgeId: 'word-wizard', currentCount: 14, unlocked: false },
      { badgeId: 'grammar-hero', currentCount: 7, unlocked: false },
      { badgeId: 'math-genius', currentCount: 12, unlocked: false },
      { badgeId: 'daily-champion', currentCount: 3, unlocked: false },
      { badgeId: 'consistent-learner', currentCount: 5, unlocked: false },
      { badgeId: 'quest-master', currentCount: 8, unlocked: false },
      { badgeId: 'smk-trailblazer', currentCount: 3, unlocked: false }
    ],
    gameHighScores: {
      'math-speed': 1050,
      'vocab-hunter': 850,
      'grammar-battle': 720
    },
    activityHistory: [
      {
        id: 'act-1',
        timestamp: '2026-11-10 11:30',
        title: 'Menyelesaikan modul Simple Present Tense for SOP',
        subject: 'english',
        type: 'lesson',
        xpEarned: 60
      },
      {
        id: 'act-2',
        timestamp: '2026-11-10 10:15',
        title: 'Juara Game Math Speed Challenge',
        subject: 'mathematics',
        type: 'game',
        xpEarned: 65,
        score: 1050
      },
      {
        id: 'act-3',
        timestamp: '2026-11-09 14:00',
        title: 'Menyelesaikan kuis Eksponen & Bentuk Akar',
        subject: 'mathematics',
        type: 'quiz',
        xpEarned: 30
      }
    ],
    dailyQuestProgress: {
      lastDate: '2026-11-10',
      claimedQuestIds: ['dq-eng-1']
    }
  },
  {
    id: 'demo-user-2',
    name: 'Siti Nurhaliza',
    username: 'siti_tkj',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    school: 'SMKN 2 Bandung',
    grade: 'Kelas XII',
    major: 'Teknik Komputer & Jaringan (TKJ)',
    bio: 'Fokus pada routing jaringan, protokol keamanan siber, dan persiapan sertifikasi internasional.',
    xp: 1240,
    level: 5,
    currentStreak: 12,
    longestStreak: 15,
    lastActiveDate: '2026-11-10',
    completedLessons: ['eng-01', 'eng-05', 'eng-08', 'eng-12', 'mat-01', 'mat-03', 'mat-07', 'mat-08'],
    completedQuizzes: ['eq-01', 'eq-02', 'eq-05', 'eq-07', 'mq-01', 'mq-04', 'mq-09', 'mq-11'],
    bookmarkedMaterials: ['eng-08', 'eng-09', 'mat-10'],
    badges: [
      { badgeId: 'first-explorer', currentCount: 8, unlocked: true, unlockedAt: '2026-10-28' },
      { badgeId: 'word-wizard', currentCount: 22, unlocked: true, unlockedAt: '2026-11-02' },
      { badgeId: 'grammar-hero', currentCount: 11, unlocked: true, unlockedAt: '2026-11-05' },
      { badgeId: 'math-genius', currentCount: 21, unlocked: true, unlockedAt: '2026-11-08' },
      { badgeId: 'daily-champion', currentCount: 6, unlocked: true, unlockedAt: '2026-11-04' },
      { badgeId: 'consistent-learner', currentCount: 12, unlocked: true, unlockedAt: '2026-11-05' },
      { badgeId: 'quest-master', currentCount: 24, unlocked: true, unlockedAt: '2026-11-09' },
      { badgeId: 'smk-trailblazer', currentCount: 5, unlocked: true, unlockedAt: '2026-11-09' }
    ],
    gameHighScores: {
      'math-speed': 1400,
      'vocab-hunter': 1100,
      'grammar-battle': 950
    },
    activityHistory: [
      {
        id: 'act-s1',
        timestamp: '2026-11-10 09:00',
        title: 'Mendapat Lencana SMK Trailblazer (Level 5)',
        subject: 'system',
        type: 'badge',
        xpEarned: 200
      },
      {
        id: 'act-s2',
        timestamp: '2026-11-09 16:30',
        title: 'Menyelesaikan modul Job Application Letter & CV',
        subject: 'english',
        type: 'lesson',
        xpEarned: 85
      }
    ],
    dailyQuestProgress: {
      lastDate: '2026-11-10',
      claimedQuestIds: ['dq-eng-1', 'dq-mat-1']
    }
  },
  {
    id: 'demo-user-3',
    name: 'Budi Santoso',
    username: 'budi_otomotif',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    school: 'SMKN 4 Jakarta',
    grade: 'Kelas X',
    major: 'Teknik Kendaraan Ringan Otomotif (TKRO)',
    bio: 'Pencinta mesin otomotif injeksi EFI, sistem hidrolik rem cakram, dan perhitungan rasio gear.',
    xp: 420,
    level: 2,
    currentStreak: 3,
    longestStreak: 4,
    lastActiveDate: '2026-11-10',
    completedLessons: ['eng-01', 'mat-01', 'mat-15'],
    completedQuizzes: ['eq-03', 'mq-01'],
    bookmarkedMaterials: ['mat-15', 'eng-06'],
    badges: [
      { badgeId: 'first-explorer', currentCount: 3, unlocked: true, unlockedAt: '2026-11-07' },
      { badgeId: 'word-wizard', currentCount: 8, unlocked: false },
      { badgeId: 'grammar-hero', currentCount: 4, unlocked: false },
      { badgeId: 'math-genius', currentCount: 9, unlocked: false },
      { badgeId: 'daily-champion', currentCount: 2, unlocked: false },
      { badgeId: 'consistent-learner', currentCount: 3, unlocked: false },
      { badgeId: 'quest-master', currentCount: 5, unlocked: false },
      { badgeId: 'smk-trailblazer', currentCount: 2, unlocked: false }
    ],
    gameHighScores: {
      'math-speed': 780,
      'vocab-hunter': 600
    },
    activityHistory: [
      {
        id: 'act-b1',
        timestamp: '2026-11-10 08:45',
        title: 'Mempelajari Rasio & Skala Gambar Teknik',
        subject: 'mathematics',
        type: 'lesson',
        xpEarned: 60
      }
    ],
    dailyQuestProgress: {
      lastDate: '2026-11-10',
      claimedQuestIds: []
    }
  }
];

