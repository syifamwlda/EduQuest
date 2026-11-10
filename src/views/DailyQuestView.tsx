import React, { useState } from 'react';
import {
  CalendarCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  Flame,
  Award,
  ArrowRight
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

export const DailyQuestView: React.FC = () => {
  const { currentUser, claimDailyQuest } = useEduQuest();

  // Daily missions for today
  const dailyMissions = [
    {
      id: 'dq-eng-1',
      subject: 'english' as const,
      title: 'English Precision: Tense of the Day',
      description: 'Lengkapi kalimat instruksi keselamatan kerja dengan bentuk kata kerja yang baku.',
      xpReward: 35,
      question: 'The cooling fan _______ automatically when the temperature exceeds 65°C.',
      options: ['activates', 'activating', 'activated', 'activate'],
      correctIndex: 0,
      explanation: 'Simple present tense untuk kebenaran umum/reaksi otomatis dengan subjek tunggal "The cooling fan" menggunakan "activates".'
    },
    {
      id: 'dq-mat-1',
      subject: 'mathematics' as const,
      title: 'Math Quest: Quick Equation',
      description: 'Pecahkan nilai x pada batas ambang daya listrik bengkel.',
      xpReward: 40,
      question: 'Tentukan nilai x jika 4x - 12 = 28!',
      options: ['x = 8', 'x = 10', 'x = 12', 'x = 14'],
      correctIndex: 1,
      explanation: '4x = 28 + 12 => 4x = 40 => x = 10.'
    },
    {
      id: 'dq-bonus-1',
      subject: 'mixed' as const,
      title: 'Bonus Mission: Vocational Wisdom',
      description: 'Pahami terminologi pencegahan kecelakaan kerja industri (K3).',
      xpReward: 25,
      question: 'Apa arti rambu keselamatan kerja "HIGH VOLTAGE - DANGER OF ELECTROCUTION"?',
      options: [
        'Tegangan tinggi - bahaya sengatan listrik',
        'Lantai licin - bahaya terpeleset',
        'Pintu keluar darurat',
        'Ruang pendingin makanan'
      ],
      correctIndex: 0,
      explanation: '"High Voltage" artinya tegangan listrik tinggi, dan "Electrocution" berarti sengatan fatal listrik.'
    }
  ];

  // Selected options state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});

  const claimedList = currentUser.dailyQuestProgress.claimedQuestIds || [];

  const handleSelectOption = (questId: string, optIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questId]: optIdx }));
    setShowFeedback(prev => ({ ...prev, [questId]: true }));
  };

  const handleClaim = (questId: string, xp: number, isCorrect: boolean) => {
    if (!isCorrect) return;
    claimDailyQuest(questId, xp);
  };

  const totalPossibleXP = dailyMissions.reduce((acc, m) => acc + m.xpReward, 0);
  const claimedCount = dailyMissions.filter(m => claimedList.includes(m.id)).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 p-6 sm:p-8 text-white shadow-floating">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-amber-200">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Misi Harian: {new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Daily Quest Challenge
            </h1>
            <p className="text-xs sm:text-sm text-teal-50 font-medium">
              Selesaikan ketiga misi harian ini untuk menjaga rentetan <strong>{currentUser.currentStreak} hari streak</strong> belajarmu!
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20">
            <span className="text-xs font-bold text-teal-100">Reward Hari Ini:</span>
            <span className="text-lg font-black text-amber-300">+{totalPossibleXP} XP</span>
            <span className="text-[11px] font-semibold text-white/80">{claimedCount} / {dailyMissions.length} Diklaim</span>
          </div>
        </div>
      </div>

      {/* Daily Missions List */}
      <div className="space-y-5">
        {dailyMissions.map((mission, mIdx) => {
          const isClaimed = claimedList.includes(mission.id);
          const chosen = selectedAnswers[mission.id];
          const hasAnswered = chosen !== undefined;
          const isCorrect = chosen === mission.correctIndex;

          return (
            <div
              key={mission.id}
              className={`p-6 rounded-3xl bg-white border transition-all shadow-card ${
                isClaimed
                  ? 'border-emerald-200/80 bg-emerald-50/20'
                  : 'border-slate-100 hover:border-teal-200'
              }`}
            >
              {/* Mission Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      mission.subject === 'english'
                        ? 'bg-sky-100 text-sky-800'
                        : mission.subject === 'mathematics'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    Misi #{mIdx + 1}
                  </span>
                  <h3 className="text-base font-black text-slate-800">{mission.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                    <Zap className="w-3 h-3 fill-amber-500" /> +{mission.xpReward} XP
                  </span>
                  {isClaimed && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Diklaim
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-500 font-medium mb-4">{mission.description}</p>

              {/* Question */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 mb-4">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
                  {mission.question}
                </p>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {mission.options.map((opt, optIdx) => {
                    let optStyle = 'bg-white border-slate-200 text-slate-700 hover:border-teal-400';
                    if (hasAnswered) {
                      if (optIdx === mission.correctIndex) {
                        optStyle = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
                      } else if (optIdx === chosen) {
                        optStyle = 'bg-rose-50 border-rose-300 text-rose-800';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={hasAnswered || isClaimed}
                        onClick={() => handleSelectOption(mission.id, optIdx)}
                        className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {hasAnswered && optIdx === mission.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {hasAnswered && showFeedback[mission.id] && (
                  <div
                    className={`p-3 rounded-xl text-xs ${
                      isCorrect
                        ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-300'
                        : 'bg-amber-100/70 text-amber-900 border border-amber-300'
                    }`}
                  >
                    <p className="font-extrabold mb-0.5">
                      {isCorrect ? '✅ Jawaban Benar!' : '💡 Penjelasan Solusi:'}
                    </p>
                    <p className="leading-snug">{mission.explanation}</p>
                  </div>
                )}
              </div>

              {/* Claim Button */}
              <div>
                {!isClaimed ? (
                  <button
                    disabled={!hasAnswered || !isCorrect}
                    onClick={() => handleClaim(mission.id, mission.xpReward, isCorrect)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-xs sm:text-sm hover:opacity-95 disabled:opacity-40 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Zap className="w-4 h-4 fill-white" />
                    <span>
                      {hasAnswered
                        ? isCorrect
                          ? `Klaim +${mission.xpReward} XP Sekarang`
                          : 'Jawaban Salah (Coba Lagi Besok)'
                        : 'Pilih Jawaban di Atas Dahulu'}
                    </span>
                  </button>
                ) : (
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold text-center border border-emerald-200">
                    Hadiah misi ini telah berhasil diklaim hari ini ✓
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

