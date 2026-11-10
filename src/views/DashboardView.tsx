import React from 'react';
import {
  Sparkles,
  Flame,
  Zap,
  BookOpen,
  Award,
  ArrowRight,
  Calculator,
  Languages,
  CheckCircle2,
  Clock,
  Play,
  TrendingUp,
  Target,
  ChevronRight
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

export const DashboardView: React.FC = () => {
  const {
    currentUser,
    materials,
    setActiveTab,
    openMaterialDetail,
    openGame
  } = useEduQuest();

  // English materials stats
  const englishTotal = materials.filter(m => m.subject === 'english');
  const englishCompleted = englishTotal.filter(m => currentUser.completedLessons.includes(m.id));
  const englishProgress = Math.round((englishCompleted.length / Math.max(1, englishTotal.length)) * 100);

  // Math materials stats
  const mathTotal = materials.filter(m => m.subject === 'mathematics');
  const mathCompleted = mathTotal.filter(m => currentUser.completedLessons.includes(m.id));
  const mathProgress = Math.round((mathCompleted.length / Math.max(1, mathTotal.length)) * 100);

  // Unfinished lessons to continue
  const unfinishedMaterials = materials
    .filter(m => !currentUser.completedLessons.includes(m.id))
    .slice(0, 3);

  // Badges earned count
  const unlockedBadgesCount = currentUser.badges.filter(b => b.unlocked).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-12">
      {/* 1. WELCOME BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-edu-blue via-edu-purple to-indigo-600 p-6 sm:p-10 text-white shadow-floating">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-60 h-60 bg-edu-sky/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-edu-yellow border border-white/20">
              <Sparkles className="w-3.5 h-3.5 fill-edu-yellow" />
              <span>Petualangan Belajar SMK Dimulai!</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Halo, {currentUser.name}! 👋
            </h1>

            <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
              "Ready for another adventure? Setiap tantangan yang kamu selesaikan membawamu selangkah lebih dekat menjadi lulusan vokasi juara!"
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-white/90">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                🏫 {currentUser.school}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                ⚙️ {currentUser.major}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                📚 {currentUser.grade}
              </span>
            </div>
          </div>

          {/* Quick CTA Card */}
          <div className="flex md:flex-col gap-3 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('daily-quest')}
              className="flex-1 md:flex-initial py-3 px-5 rounded-2xl bg-edu-yellow text-slate-900 font-black text-xs sm:text-sm hover:bg-yellow-300 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Target className="w-4 h-4 text-slate-900" />
              <span>Misi Harian Hari Ini</span>
            </button>
            <button
              onClick={() => setActiveTab('interactive-games')}
              className="flex-1 md:flex-initial py-3 px-5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Main Game Edukasi</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. LEARNING STATISTICS CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
        {/* Total XP */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-soft transition-all">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
            <Zap className="w-5 h-5 fill-amber-500 text-amber-500" />
          </div>
          <p className="text-2xl font-black text-slate-800 tracking-tight">{currentUser.xp.toLocaleString()}</p>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">Total XP</p>
        </div>

        {/* Current Level */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-soft transition-all">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-edu-blue flex items-center justify-center mb-3">
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-800 tracking-tight">Level {currentUser.level}</p>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">Tingkat Belajar</p>
        </div>

        {/* Learning Streak */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-soft transition-all">
          <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
            <Flame className="w-5 h-5 fill-orange-500 text-orange-500 animate-pulse-subtle" />
          </div>
          <p className="text-2xl font-black text-slate-800 tracking-tight">{currentUser.currentStreak} Hari</p>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">Streak Aktif</p>
        </div>

        {/* Completed Lessons */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-soft transition-all">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-800 tracking-tight">{currentUser.completedLessons.length}</p>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">Modul Tuntas</p>
        </div>

        {/* Completed Quizzes */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-soft transition-all">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-800 tracking-tight">{currentUser.completedQuizzes.length}</p>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">Kuis Selesai</p>
        </div>

        {/* Badges Earned */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-soft transition-all">
          <div className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-3">
            <Award className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-800 tracking-tight">{unlockedBadgesCount} / 8</p>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">Lencana Diraih</p>
        </div>
      </div>

      {/* 3. TWO PROMINENT SUBJECT CARDS */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
              Pilihan Mata Pelajaran Unggulan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Dirancang khusus dengan konteks vokasi, industri, dan teknologi modern.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('explore-subjects')}
            className="text-xs font-bold text-edu-blue hover:underline flex items-center gap-1"
          >
            Lihat Semua <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* A. ENGLISH ADVENTURE CARD */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 p-6 sm:p-7 border border-sky-200/70 shadow-card hover:shadow-soft hover:border-sky-300 transition-all group">
            {/* Subject Accent Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-edu-blue flex items-center justify-center text-white shadow-md shadow-sky-400/20 group-hover:scale-105 transition-transform">
                  <Languages className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-edu-blue bg-sky-100 px-2 py-0.5 rounded-full">
                    Bahasa Internasional & Kerja
                  </span>
                  <h3 className="text-xl font-black text-slate-800">English Adventure</h3>
                </div>
              </div>
              <span className="text-sm font-black text-edu-blue">{englishProgress}% Selesai</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
              Kuasai tata bahasa teknis, kosa kata peralatan bengkel/IT, penulisan surat lamaran kerja, hingga wawancara bahasa Inggris.
            </p>

            {/* Sub-skills Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['Vocabulary', 'Grammar', 'Reading', 'Writing', 'Speaking', 'Workplace'].map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] font-bold rounded-xl bg-white border border-sky-200/60 text-slate-700 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5 mb-5">
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>{englishCompleted.length} dari {englishTotal.length} Modul Tuntas</span>
                <span>{englishTotal.length * 50}+ XP Tersedia</span>
              </div>
              <div className="w-full h-2.5 bg-sky-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-edu-blue rounded-full transition-all duration-500"
                  style={{ width: `${englishProgress}%` }}
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setActiveTab('explore-subjects')}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-edu-blue to-edu-purple text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <span>Lanjutkan Petualangan English</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* B. MATHEMATICS QUEST CARD */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-amber-50/40 to-orange-50/60 p-6 sm:p-7 border border-amber-200/70 shadow-card hover:shadow-soft hover:border-amber-300 transition-all group">
            {/* Subject Accent Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md shadow-amber-400/20 group-hover:scale-105 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Logika, Formula & Terapan
                  </span>
                  <h3 className="text-xl font-black text-slate-800">Math Quest SMK</h3>
                </div>
              </div>
              <span className="text-sm font-black text-amber-600">{mathProgress}% Selesai</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
              Taklukkan aljabar, trigonometri elevasi lapangan, perhitungan bunga keuangan, matriks grafika, dan statistika mutu industri.
            </p>

            {/* Sub-skills Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['Algebra', 'Geometry', 'Statistics', 'Probability', 'Trigonometry', 'Applied Math'].map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] font-bold rounded-xl bg-white border border-amber-200/60 text-slate-700 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5 mb-5">
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>{mathCompleted.length} dari {mathTotal.length} Modul Tuntas</span>
                <span>{mathTotal.length * 60}+ XP Tersedia</span>
              </div>
              <div className="w-full h-2.5 bg-amber-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${mathProgress}%` }}
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setActiveTab('explore-subjects')}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <span>Lanjutkan Petualangan Matematika</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. CONTINUE LEARNING & DAILY QUEST SPLIT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Continue Learning (Unfinished Materials) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
              <Clock className="w-5 h-5 text-edu-blue" />
              Lanjutkan Belajar (Unfinished)
            </h3>
            <button
              onClick={() => setActiveTab('learning-center')}
              className="text-xs font-bold text-edu-blue hover:underline"
            >
              Buka Katalog Modul
            </button>
          </div>

          <div className="space-y-3">
            {unfinishedMaterials.map(item => (
              <div
                key={item.id}
                onClick={() => openMaterialDetail(item.id)}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:border-edu-blue/40 shadow-card hover:shadow-soft cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-3">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-sm ${
                      item.subject === 'english'
                        ? 'bg-gradient-to-tr from-sky-400 to-blue-600'
                        : 'bg-gradient-to-tr from-amber-400 to-orange-500'
                    }`}
                  >
                    {item.subject === 'english' ? <Languages className="w-5 h-5" /> : <Calculator className="w-5 h-5" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-bold text-amber-600 flex items-center gap-0.5">
                        <Zap className="w-2.5 h-2.5 fill-amber-500" /> +{item.xpReward} XP
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-edu-blue truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-400 truncate">Estimasi: {item.estimatedMinutes} menit belajar</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="hidden sm:inline-block text-xs font-bold text-edu-blue group-hover:underline">
                    Pelajari
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-edu-blue group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Daily Quest Preview Widget */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-white to-amber-50/40 border border-amber-200/70 shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-800">
                Daily Mission
              </span>
              <span className="text-xs font-black text-amber-600">+100 XP Total</span>
            </div>

            <h4 className="text-base font-black text-slate-800 tracking-tight">
              Tantangan Harian Hari Ini
            </h4>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Selesaikan 1 kuis English dan 1 soal Matematika untuk mempertahankan learning streak harianmu!
            </p>

            <div className="space-y-2.5">
              <div className="p-3 rounded-2xl bg-white border border-slate-100 text-xs">
                <p className="font-bold text-slate-800">Misi 1: English Precision</p>
                <p className="text-[11px] text-slate-500">Tebak tenses tepat pada instruksi keselamatan kerja.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-100 text-xs">
                <p className="font-bold text-slate-800">Misi 2: Math Linear Challenge</p>
                <p className="text-[11px] text-slate-500">Pecahkan persamaan linear batas toleransi mekanik.</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('daily-quest')}
            className="w-full mt-5 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black text-xs shadow-md shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span>Buka Tantangan Sekarang</span>
          </button>
        </div>
      </div>

      {/* 5. RECENT ACTIVITY LOG */}
      <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-card">
        <h3 className="text-lg font-black text-slate-800 tracking-tight mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          Aktivitas Belajar Terbaru
        </h3>

        {currentUser.activityHistory.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {currentUser.activityHistory.slice(0, 5).map(act => (
              <div key={act.id} className="py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                    {act.type === 'game' ? (
                      <Play className="w-4 h-4 text-edu-orange" />
                    ) : act.type === 'badge' ? (
                      <Award className="w-4 h-4 text-pink-500" />
                    ) : (
                      <BookOpen className="w-4 h-4 text-edu-blue" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{act.title}</p>
                    <p className="text-[10px] text-slate-400">{act.timestamp}</p>
                  </div>
                </div>

                <span className="font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                  +{act.xpEarned} XP
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 text-center py-4">Belum ada aktivitas tercatat.</p>
        )}
      </div>
    </div>
  );
};

