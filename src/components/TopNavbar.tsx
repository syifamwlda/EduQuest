import React, { useState } from 'react';
import {
  Menu,
  Search,
  Flame,
  Zap,
  Bell,
  ChevronDown,
  UserCheck,
  Shield,
  Sparkles,
  Award
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

interface TopNavbarProps {
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  onOpenMobileMenu,
  onOpenSearch
}) => {
  const {
    currentUser,
    allUsers,
    switchDemoUser,
    setActiveTab,
    toggleAdminMode,
    isAdmin
  } = useEduQuest();

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  // Level progress: each level is 250 XP
  const xpCurrentLevelBase = (currentUser.level - 1) * 250;
  const xpInThisLevel = currentUser.xp - xpCurrentLevelBase;
  const levelProgressPercent = Math.min(100, Math.max(0, Math.round((xpInThisLevel / 250) * 100)));

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-20 px-4 md:px-8 bg-white/90 backdrop-blur-md border-b border-slate-200/70 shadow-sm transition-all">
      {/* Left: Mobile hamburger & Global Search Trigger */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 text-slate-600 hover:text-edu-blue hover:bg-slate-100 rounded-xl transition-colors"
          aria-label="Buka Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Global Search Button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2.5 px-3.5 py-2 text-xs md:text-sm text-slate-400 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-2xl w-40 sm:w-64 md:w-80 transition-all shadow-inner group"
        >
          <Search className="w-4 h-4 text-slate-400 group-hover:text-edu-blue transition-colors" />
          <span className="truncate">Cari materi, kuis, rumus...</span>
          <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white border border-slate-200 rounded shadow-xs ml-auto">
            Ctrl K
          </kbd>
        </button>
      </div>

      {/* Right: Gamification Badges, XP counter, Switch User & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Streak Counter */}
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/60 shadow-xs cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setActiveTab('profile')}
          title={`Learning Streak: ${currentUser.currentStreak} Hari Berturut-turut!`}
        >
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse-subtle" />
          <span className="text-xs sm:text-sm font-extrabold text-orange-700">
            {currentUser.currentStreak} <span className="hidden sm:inline font-bold text-xs text-orange-600/80">Hari</span>
          </span>
        </div>

        {/* XP & Level Status Pill */}
        <div
          className="hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 shadow-xs cursor-pointer hover:shadow-md transition-all"
          onClick={() => setActiveTab('achievements')}
          title={`Total XP: ${currentUser.xp}. Progres level: ${xpInThisLevel}/250 XP`}
        >
          <div className="flex items-center gap-1 text-amber-500">
            <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
            <span className="text-sm font-black text-slate-800 tracking-tight">
              {currentUser.xp.toLocaleString()} <span className="text-xs font-bold text-edu-blue">XP</span>
            </span>
          </div>
          
          <div className="h-4 w-px bg-blue-200/60" />

          <div className="flex flex-col gap-0.5 w-16">
            <div className="flex justify-between text-[10px] font-bold text-slate-600">
              <span>Lv.{currentUser.level}</span>
              <span>{levelProgressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-blue-200/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-edu-blue to-edu-purple rounded-full transition-all duration-500"
                style={{ width: `${levelProgressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="p-2 text-slate-500 hover:text-edu-blue hover:bg-slate-100 rounded-xl transition-colors relative"
            aria-label="Notifikasi"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full ring-2 ring-white animate-ping" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Notification Dropdown */}
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-floating border border-slate-100 py-3 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between px-4 pb-2 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600">Pemberitahuan</span>
                <span className="text-[10px] font-bold text-edu-blue">Tandai Dibaca</span>
              </div>
              <div className="divide-y divide-slate-50 max-h-64 overflow-y-auto">
                <div className="p-3 hover:bg-slate-50 transition-colors flex gap-3 cursor-pointer" onClick={() => { setActiveTab('daily-quest'); setNotificationOpen(false); }}>
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Misi Harian Tersedia!</p>
                    <p className="text-[11px] text-slate-500">Tantangan bahasa Inggris & Matematika hari ini siap dikerjakan (+50 XP).</p>
                    <span className="text-[9px] text-slate-400">10 menit yang lalu</span>
                  </div>
                </div>
                <div className="p-3 hover:bg-slate-50 transition-colors flex gap-3 cursor-pointer" onClick={() => { setActiveTab('leaderboard'); setNotificationOpen(false); }}>
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Pembaruan Leaderboard Mingguan</p>
                    <p className="text-[11px] text-slate-500">Kamu berada di ranking Top 3 siswa SMK teraktif!</p>
                    <span className="text-[9px] text-slate-400">Hari ini</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile & Demo Switch Dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-2xl border border-slate-200/80 hover:border-edu-blue/50 hover:bg-slate-50 transition-all group"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-xl object-cover ring-2 ring-edu-sky/30"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-slate-800 leading-tight group-hover:text-edu-blue">
                {currentUser.name.split(' ')[0]}
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-tight">
                {currentUser.grade}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-edu-blue transition-colors" />
          </button>

          {/* Dropdown Menu */}
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-floating border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              {/* Active Profile Info */}
              <div className="p-3 bg-gradient-to-r from-blue-50/70 to-indigo-50/70 rounded-xl mb-2 border border-blue-100/60">
                <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                <p className="text-[11px] text-slate-600 font-medium">{currentUser.school}</p>
                <p className="text-[10px] text-edu-blue font-semibold mt-0.5">{currentUser.major}</p>
              </div>

              {/* Demo Account Switcher */}
              <div className="px-2 py-1">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                  Ganti Akun Siswa Demo (Prototype)
                </p>
                <div className="space-y-1">
                  {allUsers.map((user) => {
                    const isSelected = user.id === currentUser.id;
                    return (
                      <button
                        key={user.id}
                        onClick={() => {
                          switchDemoUser(user.id);
                          setProfileDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-left text-xs transition-all ${
                          isSelected
                            ? 'bg-edu-blue/10 text-edu-blue font-bold border border-edu-blue/20'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-6 h-6 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="truncate font-semibold">{user.name}</p>
                          <p className="text-[10px] text-slate-500 truncate">{user.major.split(' ')[0]}</p>
                        </div>
                        {isSelected && <UserCheck className="w-4 h-4 text-edu-blue flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-slate-100 my-1.5" />

              {/* Actions */}
              <button
                onClick={() => {
                  setActiveTab('profile');
                  setProfileDropdownOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Lihat Profil & Riwayat Belajar
              </button>

              <button
                onClick={() => {
                  toggleAdminMode();
                  setActiveTab('admin');
                  setProfileDropdownOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-amber-700 hover:bg-amber-50 flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-amber-600" />
                  Mode Admin CMS
                </span>
                <span className="text-[9px] font-bold bg-amber-200/60 px-1.5 py-0.5 rounded text-amber-900">
                  {isAdmin ? 'Aktif' : 'Masuk'}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

