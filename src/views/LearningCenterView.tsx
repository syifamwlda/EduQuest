import React, { useState } from 'react';
import {
  BookOpen,
  HelpCircle,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Zap,
  Bookmark,
  ArrowRight,
  Calculator,
  Languages,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';
import { SubjectType, DifficultyLevel } from '../types';

export const LearningCenterView: React.FC = () => {
  const {
    materials,
    quizzes,
    currentUser,
    openMaterialDetail,
    toggleBookmark,
    recordQuizCompleted
  } = useEduQuest();

  // Active sub-tab: 'modules' or 'quiz-bank'
  const [viewMode, setViewMode] = useState<'modules' | 'quiz-bank'>('modules');

  // Filters
  const [subjectFilter, setSubjectFilter] = useState<'all' | SubjectType>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | DifficultyLevel>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'uncompleted' | 'bookmarked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Quiz Bank state
  const [quizFilterSubject, setQuizFilterSubject] = useState<'all' | SubjectType>('all');
  const [quizUserAnswers, setQuizUserAnswers] = useState<Record<string, number>>({});
  const [quizFeedback, setQuizFeedback] = useState<Record<string, boolean>>({});

  // Filtered materials
  const filteredMaterials = materials.filter(m => {
    if (subjectFilter !== 'all' && m.subject !== subjectFilter) return false;
    if (difficultyFilter !== 'all' && m.difficulty !== difficultyFilter) return false;
    if (statusFilter === 'completed' && !currentUser.completedLessons.includes(m.id)) return false;
    if (statusFilter === 'uncompleted' && currentUser.completedLessons.includes(m.id)) return false;
    if (statusFilter === 'bookmarked' && !currentUser.bookmarkedMaterials.includes(m.id)) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Filtered quizzes
  const filteredQuizzes = quizzes.filter(q => {
    if (quizFilterSubject !== 'all' && q.subject !== quizFilterSubject) return false;
    return true;
  });

  const handleAnswerQuiz = (quizId: string, optionIndex: number, correctIndex: number, xpReward: number) => {
    setQuizUserAnswers(prev => ({ ...prev, [quizId]: optionIndex }));
    setQuizFeedback(prev => ({ ...prev, [quizId]: true }));

    const isCorrect = optionIndex === correctIndex;
    if (isCorrect) {
      recordQuizCompleted(quizId, xpReward);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Banner & Sub-Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-edu-purple mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pusat Belajar Terstruktur</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Learning Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Akses 30+ modul komprehensif English & Matematika dan 40+ bank soal kuis siap uji.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 self-start md:self-auto">
          <button
            onClick={() => setViewMode('modules')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              viewMode === 'modules'
                ? 'bg-white text-edu-blue shadow-sm'
                : 'text-slate-600 hover:text-edu-blue'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Modul Pembelajaran</span>
          </button>
          <button
            onClick={() => setViewMode('quiz-bank')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              viewMode === 'quiz-bank'
                ? 'bg-white text-edu-purple shadow-sm'
                : 'text-slate-600 hover:text-edu-purple'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Bank Soal Kuis</span>
          </button>
        </div>
      </div>

      {viewMode === 'modules' ? (
        <>
          {/* Filter Toolbar */}
          <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-card space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-3">
              {/* Search */}
              <div className="relative w-full md:flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Cari materi berdasarkan judul atau topik..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm outline-none focus:border-edu-blue transition-colors"
                />
              </div>

              {/* Subject Select */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <select
                  value={subjectFilter}
                  onChange={e => setSubjectFilter(e.target.value as any)}
                  className="w-full md:w-auto px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 outline-none"
                >
                  <option value="all">Semua Mapel</option>
                  <option value="english">Bahasa Inggris</option>
                  <option value="mathematics">Matematika SMK</option>
                </select>

                {/* Difficulty Select */}
                <select
                  value={difficultyFilter}
                  onChange={e => setDifficultyFilter(e.target.value as any)}
                  className="w-full md:w-auto px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 outline-none"
                >
                  <option value="all">Semua Tingkat</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                {/* Status Select */}
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value as any)}
                  className="w-full md:w-auto px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 outline-none"
                >
                  <option value="all">Semua Status</option>
                  <option value="uncompleted">Belum Selesai</option>
                  <option value="completed">Sudah Selesai</option>
                  <option value="bookmarked">Tersimpan (Bookmark)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-t border-slate-100 pt-3">
              <span>Menampilkan {filteredMaterials.length} dari {materials.length} Modul</span>
              <span>Progres Kamu: {currentUser.completedLessons.length} Modul Selesai</span>
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
                            onClick={() => toggleBookmark(m.id)}
                            className={`p-1.5 rounded-lg transition-colors ${
                              isBookmarked
                                ? 'text-pink-500 bg-pink-50'
                                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <Bookmark className="w-3.5 h-3.5 fill-current" />
                          </button>
                        </div>
                      </div>

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
                        className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-slate-50 hover:bg-edu-blue hover:text-white text-slate-700 transition-all flex items-center justify-center gap-2 group-hover:bg-edu-blue group-hover:text-white"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Pelajari Modul Ini</span>
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
              <h3 className="text-base font-bold text-slate-700">Tidak ada modul yang cocok</h3>
              <p className="text-xs text-slate-400 mt-1">Ubah kata kunci pencarian atau setel ulang filter.</p>
            </div>
          )}
        </>
      ) : (
        /* QUIZ BANK VIEW */
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Filter Mapel Kuis:</span>
              <button
                onClick={() => setQuizFilterSubject('all')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  quizFilterSubject === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Semua ({quizzes.length})
              </button>
              <button
                onClick={() => setQuizFilterSubject('english')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  quizFilterSubject === 'english'
                    ? 'bg-edu-blue text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                English ({quizzes.filter(q => q.subject === 'english').length})
              </button>
              <button
                onClick={() => setQuizFilterSubject('mathematics')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  quizFilterSubject === 'mathematics'
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Matematika ({quizzes.filter(q => q.subject === 'mathematics').length})
              </button>
            </div>

            <span className="text-xs font-bold text-slate-500 hidden sm:inline">
              Kuis Dituntaskan: {currentUser.completedQuizzes.length} Soal
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredQuizzes.map((quiz, qIdx) => {
              const chosen = quizUserAnswers[quiz.id];
              const hasAnswered = chosen !== undefined;
              const isCorrect = chosen === quiz.correctIndex;
              const alreadyCompleted = currentUser.completedQuizzes.includes(quiz.id);

              return (
                <div
                  key={quiz.id}
                  className="p-5 rounded-3xl bg-white border border-slate-100 shadow-card space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                            quiz.subject === 'english'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {quiz.topic}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          {quiz.difficulty}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                          +{quiz.xpReward} XP
                        </span>
                        {alreadyCompleted && (
                          <span title="Kuis ini sudah pernah dijawab benar">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed mb-3">
                      {qIdx + 1}. {quiz.question}
                    </p>

                    {/* Options */}
                    <div className="space-y-1.5">
                      {quiz.options.map((option, optIdx) => {
                        let btnStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700';
                        if (hasAnswered) {
                          if (optIdx === quiz.correctIndex) {
                            btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
                          } else if (optIdx === chosen) {
                            btnStyle = 'bg-rose-50 border-rose-300 text-rose-800';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={hasAnswered}
                            onClick={() =>
                              handleAnswerQuiz(
                                quiz.id,
                                optIdx,
                                quiz.correctIndex,
                                quiz.xpReward
                              )
                            }
                            className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{option}</span>
                            {hasAnswered && optIdx === quiz.correctIndex && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Immediate Explanation */}
                  {hasAnswered && quizFeedback[quiz.id] && (
                    <div
                      className={`p-3 rounded-2xl text-xs mt-2 ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                          : 'bg-amber-50 text-amber-900 border border-amber-200'
                      }`}
                    >
                      <p className="font-extrabold mb-0.5">
                        {isCorrect ? 'Benar Sekali!' : 'Pembahasan:'}
                      </p>
                      <p className="text-[11px] leading-snug">{quiz.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
