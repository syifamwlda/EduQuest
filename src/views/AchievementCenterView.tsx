import React from 'react';
import {
  Award,
  Sparkles,
  Trophy,
  Zap,
  CheckCircle2,
  Lock,
  Flame,
  Star,
  Compass,
  Shield,
  Cpu,
  Gamepad2
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

export const AchievementCenterView: React.FC = () => {
  const { badges, currentUser } = useEduQuest();

  const getBadgeIcon = (name: string) => {
    switch (name) {
      case 'First Explorer':
        return <Compass className="w-6 h-6" />;
      case 'Word Wizard':
        return <Sparkles className="w-6 h-6" />;
      case 'Grammar Hero':
        return <Shield className="w-6 h-6" />;
      case 'Math Genius':
        return <Cpu className="w-6 h-6" />;
      case 'Daily Champion':
        return <Trophy className="w-6 h-6" />;
      case 'Consistent Learner':
        return <Flame className="w-6 h-6" />;
      case 'Quest Master':
        return <Gamepad2 className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const unlockedCount = currentUser.badges.filter(b => b.unlocked).length;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-6 sm:p-8 text-white shadow-floating">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-pink-100">
              <Award className="w-3.5 h-3.5" />
              <span>Pusat Prestasi & Penghargaan Vokasi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Achievement Center
            </h1>
            <p className="text-xs sm:text-sm text-pink-50 font-medium">
              Buka lencana kehormatan dan bonus XP dengan menuntaskan tantangan belajar di EduQuest!
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between bg-white/15 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20">
            <span className="text-xs font-bold text-pink-100">Koleksi Lencana:</span>
            <span className="text-2xl font-black text-white">{unlockedCount} / {badges.length}</span>
            <span className="text-[10px] font-semibold text-pink-200">Terbuka</span>
          </div>
        </div>
      </div>

      {/* Level Roadmap Breakdown */}
      <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-card space-y-4">
        <h3 className="text-base font-black text-slate-800 tracking-tight flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
          Jenjang Level Petualang EduQuest
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { lvl: 1, title: 'Novice Learner', xpReq: '0 XP' },
            { lvl: 2, title: 'Apprentice Tech', xpReq: '250 XP' },
            { lvl: 3, title: 'Specialist Pro', xpReq: '500 XP' },
            { lvl: 4, title: 'Master Mind', xpReq: '750 XP' },
            { lvl: 5, title: 'SMK Trailblazer', xpReq: '1.000+ XP' }
          ].map(tier => {
            const isReached = currentUser.level >= tier.lvl;
            const isCurrent = currentUser.level === tier.lvl;

            return (
              <div
                key={tier.lvl}
                className={`p-3.5 rounded-2xl border text-center transition-all ${
                  isCurrent
                    ? 'bg-edu-blue/10 border-edu-blue text-edu-blue font-bold shadow-xs'
                    : isReached
                    ? 'bg-emerald-50/50 border-emerald-200 text-slate-700'
                    : 'bg-slate-50 border-slate-100 text-slate-400 opacity-60'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl mx-auto mb-2 flex items-center justify-center font-black text-xs ${
                    isCurrent
                      ? 'bg-edu-blue text-white shadow-sm'
                      : isReached
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {tier.lvl}
                </div>
                <p className="text-xs font-bold line-clamp-1">{tier.title}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{tier.xpReq}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {badges.map(badge => {
          const userProgress = currentUser.badges.find(b => b.badgeId === badge.id);
          const isUnlocked = userProgress?.unlocked || false;
          const currentCount = userProgress?.currentCount || 0;
          const progressPercent = Math.min(100, Math.round((currentCount / badge.requiredCount) * 100));

          return (
            <div
              key={badge.id}
              className={`p-5 rounded-3xl bg-white border transition-all shadow-card flex items-start gap-4 ${
                isUnlocked
                  ? 'border-purple-200/80 hover:shadow-soft'
                  : 'border-slate-100 opacity-80'
              }`}
            >
              {/* Badge Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-md ${
                  isUnlocked
                    ? `bg-gradient-to-tr ${badge.color}`
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                {isUnlocked ? getBadgeIcon(badge.name) : <Lock className="w-6 h-6" />}
              </div>

              {/* Badge Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-black text-slate-800 line-clamp-1">
                    {badge.name}
                  </h4>
                  <span className="text-[11px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md flex-shrink-0">
                    +{badge.xpBonus} XP
                  </span>
                </div>

                <p className="text-xs font-bold text-purple-700">{badge.title}</p>
                <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed mt-0.5 mb-3">
                  {badge.description}
                </p>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>{badge.conditionDescription}</span>
                    <span>{isUnlocked ? 'Tuntas ✓' : `${currentCount} / ${badge.requiredCount}`}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isUnlocked ? 'bg-emerald-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${isUnlocked ? 100 : progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

