import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  Zap,
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  Sparkles,
  Share2,
  BookOpen
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';

export const MaterialDetailView: React.FC = () => {
  const {
    selectedMaterialId,
    materials,
    currentUser,
    setActiveTab,
    openMaterialDetail,
    markLessonCompleted,
    toggleBookmark,
    showToast
  } = useEduQuest();

  // Find the selected material
  const material = materials.find(m => m.id === selectedMaterialId) || materials[0];

  // Practice question state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});

  const isCompleted = currentUser.completedLessons.includes(material.id);
  const isBookmarked = currentUser.bookmarkedMaterials.includes(material.id);

  // Related materials
  const relatedList = materials.filter(m => material.relatedIds?.includes(m.id));

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    setShowExplanations(prev => ({ ...prev, [questionId]: true }));
  };

  const handleCopyLink = () => {
    showToast('Tautan Disalin', `Tautan modul "${material.title}" siap dibagikan ke teman SMK!`, 'info');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-16">
      {/* Top Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveTab('explore-subjects')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-700 hover:text-edu-blue hover:border-edu-blue transition-all shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog Mata Pelajaran</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-edu-blue hover:bg-slate-50 transition-colors"
            title="Bagikan Materi"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleBookmark(material.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
              isBookmarked
                ? 'bg-pink-50 border-pink-200 text-pink-600'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bookmark className="w-4 h-4 fill-current" />
            <span>{isBookmarked ? 'Tersimpan' : 'Bookmark'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
              material.subject === 'english'
                ? 'bg-sky-100 text-sky-800'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {material.subject === 'english' ? 'Bahasa Inggris SMK' : 'Matematika SMK'}
          </span>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {material.category}
          </span>
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              material.difficulty === 'Beginner'
                ? 'bg-emerald-50 text-emerald-700'
                : material.difficulty === 'Intermediate'
                ? 'bg-amber-50 text-amber-700'
                : 'bg-rose-50 text-rose-700'
            }`}
          >
            Tingkat: {material.difficulty}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight leading-snug">
          {material.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
          {material.description}
        </p>

        {/* Quick meta indicators */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-600">
            <Clock className="w-4 h-4 text-edu-blue" />
            Estimasi Belajar: {material.estimatedMinutes} Menit
          </span>
          <span className="flex items-center gap-1.5 text-amber-600">
            <Zap className="w-4 h-4 fill-amber-500" />
            Reward XP: +{material.xpReward} XP
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
              <CheckCircle2 className="w-4 h-4" />
              Sudah Pernah Dituntaskan
            </span>
          )}
        </div>
      </div>

      {/* 1. LEARNING OBJECTIVES */}
      <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-100 space-y-3">
        <h3 className="text-sm font-black uppercase tracking-wider text-edu-blue flex items-center gap-2">
          <Sparkles className="w-4 h-4 fill-edu-blue" />
          Tujuan Pembelajaran (Learning Objectives)
        </h3>
        <ul className="space-y-2">
          {material.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-edu-blue text-white text-[11px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. INTRODUCTION */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-3">
        <h3 className="text-lg font-black text-slate-800 tracking-tight">
          Pengantar Konsep
        </h3>
        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
          {material.introduction}
        </p>
      </div>

      {/* 3. DETAILED SECTIONS */}
      {material.sections.map((section, idx) => (
        <div
          key={idx}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-5"
        >
          <h3 className="text-xl font-black text-slate-800 tracking-tight border-b border-slate-100 pb-3">
            {section.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed whitespace-pre-line">
            {section.content}
          </p>

          {/* Mathematical Formula / LaTeX Highlight */}
          {section.formula && (
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 font-mono text-sm sm:text-base text-amber-950 font-bold overflow-x-auto shadow-inner">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block mb-1">
                Rumus Utama:
              </span>
              {section.formula}
            </div>
          )}

          {/* Key points bullet highlights */}
          {section.keyPoints && section.keyPoints.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-slate-600">
                Poin Penting:
              </p>
              <ul className="space-y-1.5">
                {section.keyPoints.map((kp, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="text-edu-blue font-bold">•</span>
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Example / Solution Walkthrough */}
          {section.example && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-blue-50/60 border border-indigo-100 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-700 block">
                Contoh Kasus & Solusi Langkah demi Langkah:
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                {section.example.question}
              </p>
              <div className="p-3 rounded-xl bg-white border border-indigo-100 text-xs sm:text-sm text-slate-700 font-medium whitespace-pre-line leading-relaxed">
                {section.example.solution}
              </div>
              {section.example.notes && (
                <p className="text-[11px] text-indigo-600 font-semibold italic">
                  💡 Catatan: {section.example.notes}
                </p>
              )}
            </div>
          )}

          {/* Vocabulary Highlight Cards */}
          {section.vocabulary && section.vocabulary.length > 0 && (
            <div className="space-y-2.5">
              <p className="text-xs font-black uppercase tracking-wider text-edu-blue">
                Kosa Kata Kunci (Technical Vocabulary):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.vocabulary.map((vocab, vIdx) => (
                  <div
                    key={vIdx}
                    className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-edu-blue">{vocab.term}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-700">{vocab.meaning}</p>
                    <p className="text-[11px] text-slate-500 italic">
                      "{vocab.context}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practical Conversation / Dialogue */}
          {section.dialogue && section.dialogue.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-purple-600">
                Contoh Percakapan Kerja (Dialogue):
              </p>
              <div className="space-y-2">
                {section.dialogue.map((d, dIdx) => (
                  <div key={dIdx} className="p-3 rounded-2xl bg-purple-50/40 border border-purple-100 text-xs">
                    <p className="font-extrabold text-purple-900">{d.speaker}:</p>
                    <p className="text-slate-800 font-semibold mt-0.5">"{d.text}"</p>
                    <p className="text-slate-500 italic mt-0.5">({d.translation})</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* 4. PRACTICE QUESTIONS & QUIZZES */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-edu-purple bg-purple-100 px-2.5 py-0.5 rounded-full">
            Uji Pemahaman
          </span>
          <h3 className="text-xl font-black text-slate-800 tracking-tight mt-1">
            Latihan Soal Interaktif
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Pilih opsi jawaban yang menurutmu benar untuk menguji pemahaman materi ini.
          </p>
        </div>

        <div className="space-y-6">
          {material.practiceQuestions.map((q, qIndex) => {
            const chosen = selectedAnswers[q.id];
            const hasAnswered = chosen !== undefined;
            const isCorrect = chosen === q.correctIndex;

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3"
              >
                <div className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-lg bg-edu-purple text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {qIndex + 1}
                  </span>
                  <p className="text-sm font-bold text-slate-800 leading-relaxed">
                    {q.question}
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-2 pl-8">
                  {q.options.map((option, optIdx) => {
                    let optionStyle = 'bg-white border-slate-200 text-slate-700 hover:border-edu-blue';
                    if (hasAnswered) {
                      if (optIdx === q.correctIndex) {
                        optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
                      } else if (optIdx === chosen) {
                        optionStyle = 'bg-rose-50 border-rose-300 text-rose-800';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={hasAnswered}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyle}`}
                      >
                        <span>{option}</span>
                        {hasAnswered && optIdx === q.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                        {hasAnswered && optIdx === chosen && optIdx !== q.correctIndex && (
                          <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Immediate Explanation Banner */}
                {hasAnswered && showExplanations[q.id] && (
                  <div
                    className={`ml-8 p-3.5 rounded-xl text-xs leading-relaxed transition-all ${
                      isCorrect
                        ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-300'
                        : 'bg-amber-100/70 text-amber-900 border border-amber-300'
                    }`}
                  >
                    <p className="font-extrabold flex items-center gap-1.5 mb-1">
                      {isCorrect ? '✅ Jawaban Benar!' : '💡 Jawaban Belum Tepat'}
                    </p>
                    <p className="font-medium">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. SUMMARY SECTION */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white space-y-3 shadow-card">
        <h3 className="text-base font-black tracking-tight flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-edu-sky" />
          Rangkuman Materi (Summary)
        </h3>
        <ul className="space-y-1.5">
          {material.summary.map((sum, sIdx) => (
            <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
              <span className="text-edu-sky font-bold">✔</span>
              <span>{sum}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 6. COMPLETION ACTION BUTTON */}
      <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-floating text-center space-y-3">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 mb-1">
          <Award className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-black text-slate-800 tracking-tight">
          Sudah Memahami Materi Ini?
        </h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Tandai modul ini selesai untuk menambahkan +{material.xpReward} XP ke profilmu dan membuka peluang meraih lencana prestasi!
        </p>

        <button
          onClick={() => markLessonCompleted(material.id)}
          disabled={isCompleted}
          className={`py-3.5 px-8 rounded-2xl font-black text-sm transition-all shadow-md inline-flex items-center gap-2 ${
            isCompleted
              ? 'bg-emerald-500 text-white cursor-default'
              : 'bg-gradient-to-r from-edu-blue via-edu-purple to-indigo-600 text-white hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{isCompleted ? 'Modul Telah Diselesaikan ✓' : `Tandai Selesai (+${material.xpReward} XP)`}</span>
        </button>
      </div>

      {/* 7. RELATED MATERIALS */}
      {relatedList.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-base font-black text-slate-800 tracking-tight">
            Materi Terkait Selanjutnya
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedList.map(rel => (
              <div
                key={rel.id}
                onClick={() => openMaterialDetail(rel.id)}
                className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-edu-blue/40 shadow-sm cursor-pointer transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-400">{rel.category}</span>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-edu-blue line-clamp-1">
                    {rel.title}
                  </p>
                </div>
                <Zap className="w-4 h-4 text-amber-500 fill-amber-400 group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

