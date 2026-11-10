import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Gamepad2, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';
import { gameDefinitions } from '../data/gameData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const { materials, quizzes, openMaterialDetail, openGame, setActiveTab } = useEduQuest();
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  // Search filtered results
  const filteredMaterials = normalized
    ? materials.filter(
        m =>
          m.title.toLowerCase().includes(normalized) ||
          m.description.toLowerCase().includes(normalized) ||
          m.category.toLowerCase().includes(normalized)
      )
    : materials.slice(0, 4);

  const filteredGames = normalized
    ? gameDefinitions.filter(
        g =>
          g.title.toLowerCase().includes(normalized) ||
          g.tagline.toLowerCase().includes(normalized) ||
          g.description.toLowerCase().includes(normalized)
      )
    : gameDefinitions.slice(0, 3);

  const filteredQuizzes = normalized
    ? quizzes.filter(
        q =>
          q.question.toLowerCase().includes(normalized) ||
          q.category.toLowerCase().includes(normalized) ||
          q.topic.toLowerCase().includes(normalized)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-edu-blue flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Cari materi pembelajaran, game, atau kuis (misal: Eksponen, Passive Voice)..."
            className="w-full text-sm font-medium text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-lg"
          >
            Tutup
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Learning Materials */}
          {filteredMaterials.length > 0 && (
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 px-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-edu-blue" />
                Modul Pembelajaran ({filteredMaterials.length})
              </p>
              <div className="space-y-1.5">
                {filteredMaterials.map(m => (
                  <div
                    key={m.id}
                    onClick={() => {
                      openMaterialDetail(m.id);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer group transition-all"
                  >
                    <div className="min-w-0 pr-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            m.subject === 'english'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {m.subject === 'english' ? 'English' : 'Matematika'}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          {m.category}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-edu-blue mt-1 truncate">
                        {m.title}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-edu-blue group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Educational Games */}
          {filteredGames.length > 0 && (
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 px-2 flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5 text-edu-orange" />
                Game Edukatif
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredGames.map(g => (
                  <div
                    key={g.id}
                    onClick={() => {
                      openGame(g.id);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-orange-50/50 border border-slate-100 hover:border-orange-200 cursor-pointer transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-800 group-hover:text-orange-600 truncate">
                        {g.title}
                      </p>
                      <p className="text-[10px] text-slate-500 truncate">{g.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quizzes */}
          {filteredQuizzes.length > 0 && (
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 px-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-edu-purple" />
                Bank Soal Kuis ({filteredQuizzes.length})
              </p>
              <div className="space-y-1.5">
                {filteredQuizzes.slice(0, 3).map(q => (
                  <div
                    key={q.id}
                    onClick={() => {
                      setActiveTab('learning-center');
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-slate-50/70 border border-slate-100 text-xs cursor-pointer hover:border-edu-purple/40 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-edu-purple bg-purple-50 px-2 py-0.5 rounded-full">
                        {q.topic}
                      </span>
                      <span className="text-[10px] font-bold text-amber-600">+{q.xpReward} XP</span>
                    </div>
                    <p className="font-semibold text-slate-800 line-clamp-1">{q.question}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {normalized && filteredMaterials.length === 0 && filteredGames.length === 0 && filteredQuizzes.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              <p className="text-sm font-semibold">Tidak ada hasil yang cocok dengan "{query}".</p>
              <p className="text-xs mt-1">Coba kata kunci lain seperti "Aljabar", "Past Tense", atau "Speed".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

