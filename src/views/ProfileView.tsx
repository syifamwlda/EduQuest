import React, { useState } from 'react';
import {
  User,
  Edit3,
  School,
  GraduationCap,
  Flame,
  Zap,
  BookOpen,
  Award,
  Bookmark,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Save,
  RotateCcw
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

export const ProfileView: React.FC = () => {
  const {
    currentUser,
    materials,
    updateCurrentUserProfile,
    allUsers,
    switchDemoUser,
    openMaterialDetail,
    toggleBookmark,
    badges
  } = useEduQuest();

  // Profile Edit Modal State
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [school, setSchool] = useState(currentUser.school);
  const [grade, setGrade] = useState(currentUser.grade);
  const [major, setMajor] = useState(currentUser.major);
  const [bio, setBio] = useState(currentUser.bio);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateCurrentUserProfile({
      name: name.trim(),
      school: school.trim(),
      grade: grade.trim(),
      major: major.trim(),
      bio: bio.trim()
    });
    setIsEditing(false);
  };

  // Materials lists
  const completedEnglish = materials.filter(
    m => m.subject === 'english' && currentUser.completedLessons.includes(m.id)
  );
  const completedMath = materials.filter(
    m => m.subject === 'mathematics' && currentUser.completedLessons.includes(m.id)
  );
  const bookmarkedList = materials.filter(m => currentUser.bookmarkedMaterials.includes(m.id));

  // Level progress
  const xpCurrentLevelBase = (currentUser.level - 1) * 250;
  const xpInThisLevel = currentUser.xp - xpCurrentLevelBase;
  const levelProgressPercent = Math.min(100, Math.max(0, Math.round((xpInThisLevel / 250) * 100)));

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-16">
      {/* 1. PROFILE HEADER CARD */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card relative overflow-hidden">
        {/* Glow backdrop decorative */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100/50 to-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover ring-4 ring-edu-sky/30 shadow-md"
          />

          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
                  {currentUser.name}
                </h1>
                <p className="text-xs text-slate-400 font-semibold">@{currentUser.username}</p>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="self-center sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-edu-blue hover:border-edu-blue transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profil</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
              "{currentUser.bio}"
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs font-semibold text-slate-600">
              <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-edu-blue">
                🏫 {currentUser.school}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700">
                ⚙️ {currentUser.major}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                📚 {currentUser.grade}
              </span>
            </div>
          </div>
        </div>

        {/* Level & XP Progress Meter */}
        <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs font-extrabold">
            <span className="text-slate-800 flex items-center gap-1">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-400" />
              Level {currentUser.level} ({currentUser.xp} Total XP)
            </span>
            <span className="text-edu-blue font-bold">
              {xpInThisLevel} / 250 XP Menuju Level {currentUser.level + 1} ({levelProgressPercent}%)
            </span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-edu-blue to-edu-purple rounded-full transition-all duration-500"
              style={{ width: `${levelProgressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2. STATS OVERVIEW */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-card text-center">
          <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-2">
            <Flame className="w-5 h-5 fill-orange-500" />
          </div>
          <p className="text-2xl font-black text-slate-800">{currentUser.currentStreak} Hari</p>
          <p className="text-xs font-semibold text-slate-400">Streak Saat Ini</p>
          <p className="text-[10px] text-orange-600 font-bold mt-1">Rekor: {currentUser.longestStreak} hari</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-card text-center">
          <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-2">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-800">{completedEnglish.length}</p>
          <p className="text-xs font-semibold text-slate-400">Modul English</p>
          <p className="text-[10px] text-sky-600 font-bold mt-1">Tuntas Diselesaikan</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-card text-center">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-2">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-800">{completedMath.length}</p>
          <p className="text-xs font-semibold text-slate-400">Modul Matematika</p>
          <p className="text-[10px] text-amber-600 font-bold mt-1">Tuntas Diselesaikan</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-card text-center">
          <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-2">
            <Award className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-800">
            {currentUser.badges.filter(b => b.unlocked).length}
          </p>
          <p className="text-xs font-semibold text-slate-400">Lencana Diraih</p>
          <p className="text-[10px] text-purple-600 font-bold mt-1">dari 8 Penghargaan</p>
        </div>
      </div>

      {/* 3. BOOKMARKED MATERIALS LIST */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-4">
        <h3 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-pink-500 fill-pink-400" />
          Modul yang Disimpan (Bookmarks) ({bookmarkedList.length})
        </h3>

        {bookmarkedList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bookmarkedList.map(item => (
              <div
                key={item.id}
                onClick={() => openMaterialDetail(item.id)}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] font-bold text-edu-blue">{item.category}</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-edu-blue truncate">
                    {item.title}
                  </p>
                </div>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    toggleBookmark(item.id);
                  }}
                  className="p-1.5 rounded-lg text-pink-500 hover:bg-white transition-colors"
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 text-center py-4">
            Belum ada modul yang kamu simpan ke daftar bookmark.
          </p>
        )}
      </div>

      {/* 4. RECENT LEARNING HISTORY ACTIVITY LOG */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-4">
        <h3 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
          <Clock className="w-5 h-5 text-edu-blue" />
          Riwayat Aktivitas Belajar
        </h3>

        {currentUser.activityHistory.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {currentUser.activityHistory.map(act => (
              <div key={act.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-800">{act.title}</p>
                  <p className="text-[10px] text-slate-400">{act.timestamp}</p>
                </div>
                <span className="font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                  +{act.xpEarned} XP
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 text-center py-4">Belum ada riwayat aktivitas.</p>
        )}
      </div>

      {/* 5. SWITCH DEMO ACCOUNT FOOTER */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white space-y-3">
        <h3 className="text-base font-black tracking-tight flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-edu-sky" />
          Pilihan Akun Siswa Demo (Prototype)
        </h3>
        <p className="text-xs text-slate-300">
          Kamu dapat berganti ke akun siswa SMK lain kapan saja untuk menguji perbedaan jurusan, riwayat belajar, dan lencana.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {allUsers.map(u => (
            <button
              key={u.id}
              onClick={() => switchDemoUser(u.id)}
              className={`p-3 rounded-2xl border text-left transition-all ${
                u.id === currentUser.id
                  ? 'bg-edu-blue border-edu-sky text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/20 border-white/10 text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-xl object-cover" />
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">{u.name}</p>
                  <p className="text-[10px] text-slate-300 truncate">{u.major.split(' ')[0]}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-4 animate-in zoom-in-95 duration-150">
            <h3 className="text-xl font-black text-slate-800 tracking-tight">
              Edit Data Profil Siswa
            </h3>

            <form onSubmit={handleSaveProfile} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Asal Sekolah</label>
                <input
                  type="text"
                  required
                  value={school}
                  onChange={e => setSchool(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Kelas</label>
                  <input
                    type="text"
                    required
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Jurusan SMK</label>
                  <input
                    type="text"
                    required
                    value={major}
                    onChange={e => setMajor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Bio / Minat Belajar</label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={e => setBio(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-edu-blue"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-edu-blue text-white font-bold text-xs sm:text-sm hover:bg-blue-600 shadow-md flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

