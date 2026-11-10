import React, { useState } from 'react';
import {
  Trophy,
  Medal,
  Award,
  Flame,
  Zap,
  TrendingUp,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

export const LeaderboardView: React.FC = () => {
  const { getLeaderboard, currentUser } = useEduQuest();
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'all-time'>('weekly');

  const rankedUsers = getLeaderboard(timeframe);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-6 sm:p-8 text-white shadow-floating">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-amber-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Klasemen Siswa Vokasi Se-Indonesia</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Peringkat Juara EduQuest
            </h1>
            <p className="text-xs sm:text-sm text-amber-50 font-medium">
              Kumpulkan XP dari belajar mandiri, kuis, dan game edukasi untuk memuncaki papan peringkat!
            </p>
          </div>

          <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 self-start sm:self-auto">
            <button
              onClick={() => setTimeframe('weekly')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                timeframe === 'weekly' ? 'bg-white text-slate-900 shadow-sm' : 'text-white/80 hover:text-white'
              }`}
            >
              Mingguan
            </button>
            <button
              onClick={() => setTimeframe('monthly')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                timeframe === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-white/80 hover:text-white'
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setTimeframe('all-time')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                timeframe === 'all-time' ? 'bg-white text-slate-900 shadow-sm' : 'text-white/80 hover:text-white'
              }`}
            >
              Sepanjang Masa
            </button>
          </div>
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {rankedUsers.slice(0, 3).map((user, idx) => {
          const podiumColor =
            idx === 0
              ? 'from-amber-400 to-yellow-500 border-amber-300'
              : idx === 1
              ? 'from-slate-300 to-slate-400 border-slate-300'
              : 'from-amber-600 to-orange-700 border-amber-600';

          return (
            <div
              key={user.id}
              className={`p-6 rounded-3xl bg-white border shadow-card text-center space-y-3 relative overflow-hidden ${
                user.isCurrentUser ? 'ring-2 ring-edu-blue' : 'border-slate-100'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${podiumColor} text-white font-black text-sm flex items-center justify-center mx-auto shadow-md`}
              >
                #{user.rank}
              </div>

              <div className="relative inline-block">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-2xl object-cover mx-auto ring-4 ring-amber-100"
                />
                {user.isCurrentUser && (
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-md bg-edu-blue text-white text-[9px] font-black">
                    KAMU
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-800 line-clamp-1">{user.name}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-1">{user.school}</p>
                <p className="text-[10px] text-edu-blue font-bold line-clamp-1">{user.major}</p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100">
                <span className="inline-flex items-center gap-1 text-xs font-black text-amber-600">
                  <Zap className="w-3.5 h-3.5 fill-amber-500" /> {user.xp.toLocaleString()} XP
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-bold text-orange-600 flex items-center gap-0.5">
                  <Flame className="w-3.5 h-3.5 fill-orange-500" /> {user.streak}d
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leaderboard Table */}
      <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-card space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-extrabold uppercase tracking-wider text-slate-400 px-2">
          <span>Peringkat & Nama Siswa</span>
          <span>Akumulasi XP</span>
        </div>

        <div className="space-y-2">
          {rankedUsers.map((user) => (
            <div
              key={user.id}
              className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                user.isCurrentUser
                  ? 'bg-blue-50/70 border border-blue-200/80 shadow-xs'
                  : 'bg-slate-50/60 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0 pr-3">
                <span className="w-7 text-center text-xs font-black text-slate-600 flex-shrink-0">
                  #{user.rank}
                </span>

                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-xl object-cover flex-shrink-0 ring-2 ring-slate-200"
                />

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {user.name}
                    </p>
                    {user.isCurrentUser && (
                      <span className="px-1.5 py-0.2 rounded bg-edu-blue text-white text-[9px] font-black flex-shrink-0">
                        KAMU
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">
                    {user.school} • <span className="text-edu-blue font-semibold">{user.major}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-orange-600">
                  <Flame className="w-3.5 h-3.5 fill-orange-500" /> {user.streak} hari
                </span>
                <span className="text-xs sm:text-sm font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-xl">
                  {user.xp.toLocaleString()} XP
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 text-center pt-2">
          💡 Profil siswa bertanda (Prototype Demo Data) digunakan untuk simulasi ekosistem kompetisi belajar SMK.
        </p>
      </div>
    </div>
  );
};

