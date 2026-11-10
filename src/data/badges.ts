import { Badge } from '../types';

export const initialBadges: Badge[] = [
  {
    id: 'first-explorer',
    name: 'First Explorer',
    title: 'Penjelajah Pertama',
    description: 'Selesaikan modul pembelajaran pertamamu di EduQuest.',
    icon: 'Compass',
    color: 'from-blue-500 to-indigo-500',
    category: 'learning',
    conditionDescription: 'Selesaikan 1 modul materi.',
    requiredCount: 1,
    xpBonus: 50
  },
  {
    id: 'word-wizard',
    name: 'Word Wizard',
    title: 'Pakar Kosa Kata',
    description: 'Kuasai kosa kata teknis bahasa Inggris kejuruan.',
    icon: 'Sparkles',
    color: 'from-sky-400 to-blue-500',
    category: 'learning',
    conditionDescription: 'Jawab benar 20 pertanyaan kosa kata atau kuis bahasa Inggris.',
    requiredCount: 20,
    xpBonus: 100
  },
  {
    id: 'grammar-hero',
    name: 'Grammar Hero',
    title: 'Pahlawan Tata Bahasa',
    description: 'Taklukkan tantangan grammar, tenses, dan passive voice.',
    icon: 'Shield',
    color: 'from-purple-500 to-pink-500',
    category: 'learning',
    conditionDescription: 'Selesaikan 10 tantangan Grammar Battle atau latihan struktur kalimat.',
    requiredCount: 10,
    xpBonus: 80
  },
  {
    id: 'math-genius',
    name: 'Math Genius',
    title: 'Jenius Matematika SMK',
    description: 'Pecahkan perhitungan aljabar, trigonometri, dan matematika terapan.',
    icon: 'Cpu',
    color: 'from-amber-400 to-orange-500',
    category: 'learning',
    conditionDescription: 'Jawab benar 20 pertanyaan kuis matematika.',
    requiredCount: 20,
    xpBonus: 100
  },
  {
    id: 'daily-champion',
    name: 'Daily Champion',
    title: 'Kampiun Misi Harian',
    description: 'Tuntaskan misi belajar harian tanpa absen.',
    icon: 'Trophy',
    color: 'from-yellow-400 to-amber-500',
    category: 'streak',
    conditionDescription: 'Selesaikan 5 misi Daily Quest.',
    requiredCount: 5,
    xpBonus: 120
  },
  {
    id: 'consistent-learner',
    name: 'Consistent Learner',
    title: 'Pembelajar Tangguh',
    description: 'Bangun kebiasaan belajar konsisten selama 7 hari berturut-turut.',
    icon: 'Flame',
    color: 'from-orange-500 to-red-500',
    category: 'streak',
    conditionDescription: 'Capai learning streak 7 hari berturut-turut.',
    requiredCount: 7,
    xpBonus: 150
  },
  {
    id: 'quest-master',
    name: 'Quest Master',
    title: 'Master Game Edukatif',
    description: 'Buktikan ketangkasan dan pemahamanmu di arena game EduQuest.',
    icon: 'Gamepad2',
    color: 'from-emerald-400 to-teal-500',
    category: 'game',
    conditionDescription: 'Mainkan dan menangkan 20 game interaktif edukatif.',
    requiredCount: 20,
    xpBonus: 120
  },
  {
    id: 'smk-trailblazer',
    name: 'SMK Trailblazer',
    title: 'Pelopor Vokasi Juara',
    description: 'Naik ke Level 5 melalui akumulasi XP dari semua aktivitas belajar.',
    icon: 'Award',
    color: 'from-violet-500 to-purple-700',
    category: 'mastery',
    conditionDescription: 'Raih Level 5.',
    requiredCount: 5,
    xpBonus: 200
  }
];

