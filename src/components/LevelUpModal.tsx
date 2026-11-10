import React from 'react';
import { Sparkles, Trophy, ArrowRight, Zap } from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

export const LevelUpModal: React.FC = () => {
  const { levelUpModalData, closeLevelUpModal, currentUser } = useEduQuest();

  if (!levelUpModalData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-6 sm:p-8 bg-white rounded-3xl shadow-2xl border border-slate-100 text-center overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Glow backdrop decorative */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-edu-yellow/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-edu-purple/40 rounded-full blur-3xl pointer-events-none" />

        {/* Icon Animation */}
        <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4 rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-400 to-yellow-300 text-white shadow-glow-yellow animate-bounce-subtle">
          <Trophy className="w-12 h-12 fill-white/90" />
          <div className="absolute -top-2 -right-2 p-1.5 bg-white rounded-full shadow-md">
            <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
          </div>
        </div>

        {/* Headline */}
        <p className="text-xs font-black tracking-widest text-amber-500 uppercase">
          Selamat! Level Up!
        </p>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mt-1">
          LEVEL {levelUpModalData.level}
        </h2>

        {/* Subtitle Message */}
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Luar biasa, <strong className="text-slate-800">{currentUser.name}</strong>! Kerja keras dan dedikasimu belajar di EduQuest membawamu naik ke peringkat berikutnya.
        </p>

        {/* Level Stats Pill */}
        <div className="flex items-center justify-center gap-4 p-3 my-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Total XP: {levelUpModalData.xp}</span>
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="text-xs font-bold text-edu-blue">
            Siswa Unggul SMK
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={closeLevelUpModal}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-edu-blue to-edu-purple text-white font-extrabold text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>Lanjutkan Petualangan Belajar</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

