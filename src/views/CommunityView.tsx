import React, { useState } from 'react';
import {
  Users,
  Heart,
  Bookmark,
  MessageSquare,
  Share2,
  PlusCircle,
  Sparkles,
  Send,
  Code,
  Tag,
  Check
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';
import { SubjectType } from '../types';

export const CommunityView: React.FC = () => {
  const {
    communityPosts,
    currentUser,
    togglePostLike,
    togglePostBookmark,
    addCommunityPost,
    showToast
  } = useEduQuest();

  // Create post modal / form state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newSubject, setNewSubject] = useState<SubjectType>('english');
  const [newTags, setNewTags] = useState('');
  const [newFormula, setNewFormula] = useState('');

  // Filter
  const [subjectFilter, setSubjectFilter] = useState<'all' | SubjectType>('all');

  const filteredPosts = communityPosts.filter(p => {
    if (subjectFilter !== 'all' && p.subject !== subjectFilter) return false;
    return true;
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      showToast('Form Belum Lengkap', 'Judul dan isi catatan wajib diisi.', 'info');
      return;
    }

    const tagsArray = newTags
      .split(',')
      .map(t => t.trim().replace(/^#/, ''))
      .filter(Boolean);

    addCommunityPost({
      authorId: currentUser.id,
      authorName: currentUser.name,
      authorMajor: currentUser.major,
      authorAvatar: currentUser.avatar,
      subject: newSubject,
      title: newTitle.trim(),
      content: newContent.trim(),
      tags: tagsArray.length > 0 ? tagsArray : ['CatatanSMK', 'BelajarMandiri'],
      formulaOrCode: newFormula.trim() || undefined
    });

    // Reset and close
    setNewTitle('');
    setNewContent('');
    setNewTags('');
    setNewFormula('');
    setShowCreateModal(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600 p-6 sm:p-8 text-white shadow-floating">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-teal-100">
              <Users className="w-3.5 h-3.5" />
              <span>Ruang Kolaborasi Belajar SMK</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Student Community
            </h1>
            <p className="text-xs sm:text-sm text-teal-50 font-medium">
              Bagikan catatan trik rumus, rangkuman materi bahasa Inggris kerja, dan solusi teknis bersama teman-teman SMK.
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-teal-800 font-extrabold text-xs sm:text-sm shadow-md hover:bg-teal-50 hover:scale-105 active:scale-95 transition-all self-start sm:self-auto"
          >
            <PlusCircle className="w-4 h-4 text-teal-600" />
            <span>Tulis Catatan Belajar</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <button
            onClick={() => setSubjectFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subjectFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Semua Topik ({communityPosts.length})
          </button>
          <button
            onClick={() => setSubjectFilter('english')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subjectFilter === 'english'
                ? 'bg-edu-blue text-white shadow-sm'
                : 'text-slate-600 hover:text-edu-blue'
            }`}
          >
            Bahasa Inggris
          </button>
          <button
            onClick={() => setSubjectFilter('mathematics')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subjectFilter === 'mathematics'
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-orange-600'
            }`}
          >
            Matematika SMK
          </button>
        </div>

        <span className="text-xs font-bold text-slate-400 hidden sm:inline">
          Dapatkan +30 XP setiap membagikan catatan
        </span>
      </div>

      {/* Posts List */}
      <div className="space-y-5">
        {filteredPosts.map(post => (
          <div
            key={post.id}
            className="p-6 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 shadow-card transition-all space-y-4"
          >
            {/* Author Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.authorAvatar}
                  alt={post.authorName}
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-slate-100"
                />
                <div>
                  <h4 className="text-sm font-black text-slate-800">{post.authorName}</h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {post.authorMajor} •{' '}
                    <span>
                      {new Date(post.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </span>
                  </p>
                </div>
              </div>

              <span
                className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  post.subject === 'english'
                    ? 'bg-sky-100 text-sky-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {post.subject === 'english' ? 'English' : 'Matematika'}
              </span>
            </div>

            {/* Post Title & Content */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>

            {/* Optional formula or code snippet */}
            {post.formulaOrCode && (
              <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
                {post.formulaOrCode}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-bold"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons: Like, Bookmark, Comments */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => togglePostLike(post.id)}
                  className={`flex items-center gap-1.5 font-bold transition-colors ${
                    post.likedByUser ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${post.likedByUser ? 'fill-current' : ''}`} />
                  <span>{post.likes} Suka</span>
                </button>

                <div className="flex items-center gap-1.5 text-slate-400 font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.commentCount} Komentar</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => togglePostBookmark(post.id)}
                  className={`p-2 rounded-xl transition-colors ${
                    post.bookmarkedByUser
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
                  title="Simpan Catatan"
                >
                  <Bookmark className={`w-4 h-4 ${post.bookmarkedByUser ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-4 animate-in zoom-in-95 duration-150">
            <h3 className="text-xl font-black text-slate-800 tracking-tight">
              Tulis Catatan Belajar Baru
            </h3>
            <p className="text-xs text-slate-500">
              Bagikan tips belajar, rumus praktis, atau ringkasan materi untuk teman-teman vokasi. (+30 XP)
            </p>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mata Pelajaran</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setNewSubject('english')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      newSubject === 'english'
                        ? 'bg-edu-blue text-white border-edu-blue'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    Bahasa Inggris
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewSubject('mathematics')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      newSubject === 'mathematics'
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    Matematika SMK
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Judul Catatan</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="Contoh: Cara Cepat Menghitung Bunga Majemuk..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Isi Catatan</label>
                <textarea
                  required
                  rows={4}
                  value={newContent}
                  onChange={e => setNewContent(e.target.value)}
                  placeholder="Tuliskan penjelasan materi atau tips belajarmu di sini..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Formula Matematika / Cuplikan Kode (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={newFormula}
                  onChange={e => setNewFormula(e.target.value)}
                  placeholder="Rumus: Mn = M(1 + i)^n"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono outline-none focus:border-edu-blue"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Tag Kategori (pisahkan dengan koma)
                </label>
                <input
                  type="text"
                  value={newTags}
                  onChange={e => setNewTags(e.target.value)}
                  placeholder="MatematikaKeuangan, Bunga, BelajarSMK"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-edu-blue"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-xs sm:text-sm hover:opacity-95 shadow-md flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Terbitkan Catatan (+30 XP)</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

