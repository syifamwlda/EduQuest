import React from 'react';
import {
  LayoutDashboard,
  Compass,
  BookOpen,
  Gamepad2,
  CalendarCheck,
  Trophy,
  Award,
  Users,
  User,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Flame,
  Zap,
  GraduationCap
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (val: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  setMobileOpen
}) => {
  const { activeTab, setActiveTab, currentUser, isAdmin, toggleAdminMode } = useEduQuest();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-edu-blue' },
    { id: 'explore-subjects', label: 'Explore Subjects', icon: Compass, color: 'text-edu-sky' },
    { id: 'learning-center', label: 'Learning Center', icon: BookOpen, color: 'text-edu-purple' },
    { id: 'interactive-games', label: 'Interactive Games', icon: Gamepad2, color: 'text-edu-orange', badge: '10 Games' },
    { id: 'daily-quest', label: 'Daily Quest', icon: CalendarCheck, color: 'text-emerald-500', badge: 'Active' },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy, color: 'text-amber-500' },
    { id: 'achievements', label: 'Achievement Center', icon: Award, color: 'text-pink-500' },
    { id: 'community', label: 'Student Community', icon: Users, color: 'text-teal-500' },
    { id: 'profile', label: 'My Learning', icon: User, color: 'text-indigo-500' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-white border-r border-slate-200/80 shadow-soft transition-all duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}
        `}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-slate-100">
          <div
            className={`flex items-center gap-3 cursor-pointer overflow-hidden transition-all ${isCollapsed ? 'justify-center' : ''}`}
            onClick={() => handleNavClick('dashboard')}
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-tr from-edu-blue to-edu-sky flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <GraduationCap className="w-6 h-6 animate-pulse-subtle" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-edu-blue via-edu-purple to-pink-500 bg-clip-text text-transparent">
                  EDUQUEST
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-edu-muted">
                  Learn · Play · Level Up
                </span>
              </div>
            )}
          </div>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 hover:text-edu-blue hover:bg-slate-100 transition-colors"
            title={isCollapsed ? 'Buka Sidebar' : 'Ciutkan Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative
                  ${isActive
                    ? 'bg-gradient-to-r from-edu-blue to-edu-purple text-white shadow-md shadow-blue-500/20 font-semibold'
                    : 'text-slate-600 hover:text-edu-blue hover:bg-slate-50'
                  }
                  ${isCollapsed ? 'justify-center px-0' : ''}
                `}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-white' : item.color
                  }`}
                />
                {!isCollapsed && (
                  <span className="flex-1 text-left truncate">{item.label}</span>
                )}
                {!isCollapsed && item.badge && !isActive && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-edu-sky/20 text-edu-blue">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Divider */}
          <div className="pt-2 pb-1">
            <div className="h-px bg-slate-100" />
          </div>

          {/* Admin Panel Toggle */}
          <button
            onClick={() => {
              toggleAdminMode();
              setActiveTab('admin');
              setMobileOpen(false);
            }}
            className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group
              ${activeTab === 'admin'
                ? 'bg-slate-900 text-white shadow-md font-semibold'
                : 'text-slate-500 hover:text-slate-900 hover:bg-amber-50/60'
              }
              ${isCollapsed ? 'justify-center px-0' : ''}
            `}
            title={isCollapsed ? 'Admin Dashboard' : undefined}
          >
            <ShieldAlert className="w-5 h-5 flex-shrink-0 text-amber-500 group-hover:rotate-12 transition-transform" />
            {!isCollapsed && (
              <div className="flex items-center justify-between flex-1 text-left">
                <span>Admin CMS</span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-amber-100 text-amber-800">
                  Prototype
                </span>
              </div>
            )}
          </button>
        </div>

        {/* Student Mini Card / Rank Status Footer */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/50">
          {!isCollapsed ? (
            <div
              onClick={() => handleNavClick('profile')}
              className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200/60 hover:border-edu-blue/40 shadow-sm cursor-pointer transition-all group"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-edu-sky/30 group-hover:ring-edu-blue transition-all"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate group-hover:text-edu-blue">
                  {currentUser.name}
                </p>
                <p className="text-[10px] text-slate-500 truncate">{currentUser.major}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-extrabold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded-md">
                    <Zap className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> Lv.{currentUser.level}
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.2 rounded-md">
                    <Flame className="w-2.5 h-2.5 fill-orange-500 text-orange-500" /> {currentUser.currentStreak}d
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={() => handleNavClick('profile')}
              className="flex justify-center cursor-pointer group"
              title={`${currentUser.name} - Level ${currentUser.level}`}
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-edu-sky/30 group-hover:ring-edu-blue transition-all"
              />
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

