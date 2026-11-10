import React, { useState } from 'react';
import {
  Languages,
  Calculator,
  Search,
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight,
  Bookmark,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';
import { SubjectType } from '../types';

export const ExploreSubjectsView: React.FC = () => {
  const {
    materials,
    currentUser,
    openMaterialDetail,
    toggleBookmark
  } = useEduQuest();

  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('english');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const englishCategories = [
    'All',
    'Vocabulary Building',
    'Grammar Fundamentals',
    'Reading Comprehension',
    'Writing Skills',
    'Speaking Practice',
    'Functional Texts',
    'Workplace English',
    'English for Technology',
    'Job Interview English'
  ];

  const mathCategories = [
    'All',
    'Algebra',
    'Linear Equations',
    'Sequences and Series',
    'Trigonometry',
    'Geometry',
    'Statistics',
    'Probability',
    'Financial Mathematics',
    'Applied Mathematics'
  ];

  const currentCategories = selectedSubject === 'english' ? englishCategories : mathCategories;

  // Filter materials
  const filteredMaterials = materials.filter(m => {
    if (m.subject !== selectedSubject) return false;
    if (selectedCategory !== 'All' && m.category !== selectedCategory) return false;
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      return (
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-12">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-edu-blue mb-2">
            <Sparkles className="w-3.5 h-3.5 text-edu-blue" />
            <span>Katalog Kurikulum SMK Terstandar</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Eksplorasi Mata Pelajaran
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Pilih materi berbasis kompetensi vokasi industri dengan latihan interaktif dan penjelasan tuntas.
          </p>
        </div>

        {/* Subject Switcher Toggle */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 self-start md:self-auto">
          <button
            onClick={() => {
              setSelectedSubject('english');
              setSelectedCategory('All');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              selectedSubject === 'english'
                ? 'bg-gradient-to-r from-sky-400 to-edu-blue text-white shadow-md'
                : 'text-slate-600 hover:text-edu-blue'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span>Bahasa Inggris</span>
          </button>
          <button
            onClick={() => {
              setSelectedSubject('mathematics');
              setSelectedCategory('All');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              selectedSubject === 'mathematics'
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md'
                : 'text-slate-600 hover:text-orange-600'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Matematika SMK</span>
          </button>
        </div>
      </div>

      {/* Category Filter Chips & Search Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              placeholder={`Cari topik ${selectedSubject === 'english' ? 'English' : 'Matematika'}...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue transition-colors shadow-2xs"
            />
          </div>

          <div className="text-xs font-bold text-slate-500 ml-auto hidden sm:block">
            Menampilkan <span className="text-slate-800">{filteredMaterials.length}</span> Modul Pembelajaran
          </div>
        </div>

        {/* Categories scrollable pill list */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {currentCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? selectedSubject === 'english'
                    ? 'bg-edu-blue text-white shadow-sm'
                    : 'bg-orange-500 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Materials Grid */}
      {filteredMaterials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMaterials.map(m => {
            const isCompleted = currentUser.completedLessons.includes(m.id);
            const isBookmarked = currentUser.bookmarkedMaterials.includes(m.id);

            return (
              <div
                key={m.id}
                className="flex flex-col justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-edu-blue/40 shadow-card hover:shadow-soft transition-all group"
              >
                <div>
                  {/* Top Meta: Category + XP + Bookmark */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        m.subject === 'english'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {m.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-0.5 text-[11px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                        <Zap className="w-3 h-3 fill-amber-500" /> +{m.xpReward} XP
                      </span>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          toggleBookmark(m.id);
                        }}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isBookmarked
                            ? 'text-pink-500 bg-pink-50'
                            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                        }`}
                        title={isBookmarked ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    onClick={() => openMaterialDetail(m.id)}
                    className="text-base font-bold text-slate-800 group-hover:text-edu-blue cursor-pointer transition-colors line-clamp-1 mb-2"
                  >
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed mb-4">
                    {m.description}
                  </p>
                </div>

                {/* Footer Info & Action */}
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 py-2 border-t border-slate-100 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {m.estimatedMinutes} Menit
                    </span>
                    <span>•</span>
                    <span
                      className={`font-bold ${
                        m.difficulty === 'Beginner'
                          ? 'text-emerald-600'
                          : m.difficulty === 'Intermediate'
                          ? 'text-amber-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {m.difficulty}
                    </span>
                    {isCompleted && (
                      <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3 h-3" /> Selesai
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openMaterialDetail(m.id)}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isCompleted
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        : selectedSubject === 'english'
                        ? 'bg-edu-blue text-white hover:bg-blue-600 shadow-sm'
                        : 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isCompleted ? 'Pelajari Ulang' : 'Mulai Belajar'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-100">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">Tidak ada materi yang ditemukan</h3>
          <p className="text-xs text-slate-400 mt-1">
            Coba ubah filter kategori atau kata kunci pencarian.
          </p>
        </div>
      )}
    </div>
  );
};

