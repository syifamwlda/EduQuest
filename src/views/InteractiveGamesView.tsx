import React, { useState, useEffect } from 'react';
import {
  Gamepad2,
  Sparkles,
  Zap,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  Trophy,
  Award,
  ArrowRight,
  Flame,
  Shuffle,
  Volume2,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';
import {
  gameDefinitions,
  vocabHunterItems,
  grammarBattleItems,
  wordMatchPairs,
  readingDetectivePassages,
  arrangeSentenceItems,
  mathSpeedItems,
  formulaMasterPairs,
  mathPuzzleItems,
  equationSolverScenarios,
  mixedSubjectMissions
} from '../data/gameData';
import { GameMode } from '../types';

export const InteractiveGamesView: React.FC = () => {
  const {
    activeGameId,
    openGame,
    recordGamePlayed,
    currentUser,
    triggerConfetti
  } = useEduQuest();

  // Selected game mode (null means game hub / catalogue)
  const [selectedGame, setSelectedGame] = useState<GameMode | null>(
    (activeGameId as GameMode) || null
  );

  // Sync when activeGameId changes from outside
  useEffect(() => {
    if (activeGameId) {
      setSelectedGame(activeGameId as GameMode);
    }
  }, [activeGameId]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* If no game selected, show Game Center Hub */}
      {!selectedGame ? (
        <GameCenterHub onSelectGame={gameId => setSelectedGame(gameId)} />
      ) : (
        <ActiveGamePlayArea
          gameId={selectedGame}
          onBackToHub={() => setSelectedGame(null)}
          onRecordScore={(score, xp) => recordGamePlayed(selectedGame, score, xp)}
          triggerConfetti={triggerConfetti}
        />
      )}
    </div>
  );
};

// ==========================================
// 1. GAME CENTER HUB
// ==========================================
const GameCenterHub: React.FC<{ onSelectGame: (id: GameMode) => void }> = ({ onSelectGame }) => {
  const { currentUser } = useEduQuest();
  const [filterSubject, setFilterSubject] = useState<'all' | 'english' | 'mathematics' | 'mixed'>('all');

  const filteredGames = gameDefinitions.filter(g => {
    if (filterSubject === 'all') return true;
    return g.subject === filterSubject;
  });

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-6 sm:p-10 text-white shadow-floating">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EduQuest Arcade 100% Playable</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Arena Game Belajar Interaktif
          </h1>
          <p className="text-xs sm:text-base text-white/90 font-medium leading-relaxed">
            Belajar jadi seru seperti bermain game! Taklukkan 10 mini-game edukasi English & Matematika untuk panen XP dan menaikkan level belajarmu.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <button
            onClick={() => setFilterSubject('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterSubject === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Semua Game (10)
          </button>
          <button
            onClick={() => setFilterSubject('english')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterSubject === 'english'
                ? 'bg-edu-blue text-white shadow-sm'
                : 'text-slate-600 hover:text-edu-blue'
            }`}
          >
            English Game (5)
          </button>
          <button
            onClick={() => setFilterSubject('mathematics')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterSubject === 'mathematics'
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-orange-600'
            }`}
          >
            Matematika Game (4)
          </button>
          <button
            onClick={() => setFilterSubject('mixed')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterSubject === 'mixed'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-purple-600'
            }`}
          >
            Misi Gabungan (1)
          </button>
        </div>
      </div>

      {/* Game Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredGames.map(game => {
          const userHighScore = currentUser.gameHighScores[game.id] || 0;

          return (
            <div
              key={game.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-100 hover:border-orange-300 shadow-card hover:shadow-soft transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      game.subject === 'english'
                        ? 'bg-sky-100 text-sky-800'
                        : game.subject === 'mathematics'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {game.subject === 'english' ? 'English' : game.subject === 'mathematics' ? 'Matematika' : 'English + Math'}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                    <Zap className="w-3 h-3 fill-amber-500" /> +{game.xpBase} XP
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-800 group-hover:text-edu-orange transition-colors">
                  {game.title}
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-0.5 mb-2">
                  {game.tagline}
                </p>
                <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed mb-4">
                  {game.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between py-2 border-t border-slate-100 text-xs font-semibold text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> ~{game.durationMinutes} Menit
                  </span>
                  {userHighScore > 0 ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" /> Skor Terbaik: {userHighScore}
                    </span>
                  ) : (
                    <span className="text-slate-400">Belum Dimainkan</span>
                  )}
                </div>

                <button
                  onClick={() => onSelectGame(game.id)}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Main Sekarang</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// 2. ACTIVE GAME PLAY AREA DISPATCHER
// ==========================================
interface ActiveGamePlayAreaProps {
  gameId: GameMode;
  onBackToHub: () => void;
  onRecordScore: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}

const ActiveGamePlayArea: React.FC<ActiveGamePlayAreaProps> = ({
  gameId,
  onBackToHub,
  onRecordScore,
  triggerConfetti
}) => {
  const def = gameDefinitions.find(g => g.id === gameId);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Game Header Bar */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
        <button
          onClick={onBackToHub}
          className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1.5"
        >
          ← Kembali ke Arena Game
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-slate-800">{def?.title}</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
            +{def?.xpBase} XP Reward
          </span>
        </div>
      </div>

      {/* Render the specific functional game component */}
      {gameId === 'vocab-hunter' && (
        <VocabHunterGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'grammar-battle' && (
        <GrammarBattleGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'word-match' && (
        <WordMatchGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'reading-detective' && (
        <ReadingDetectiveGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'arrange-sentence' && (
        <ArrangeSentenceGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'math-speed' && (
        <MathSpeedGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'formula-master' && (
        <FormulaMasterGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'math-puzzle' && (
        <MathPuzzleGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'equation-solver' && (
        <EquationSolverGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
      {gameId === 'mixed-challenge' && (
        <MixedSubjectChallengeGame onFinish={onRecordScore} triggerConfetti={triggerConfetti} />
      )}
    </div>
  );
};

// ==========================================
// 3. SPECIFIC GAME IMPLEMENTATIONS
// ==========================================

// --- GAME 1: VOCABULARY HUNTER ---
const VocabHunterGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const currentItem = vocabHunterItems[index];

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentItem.word;
    if (isCorrect) {
      setScore(s => s + 100);
    }
  };

  const handleNext = () => {
    if (index + 1 < vocabHunterItems.length) {
      setIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setGameOver(true);
      triggerConfetti();
      onFinish(score, 50);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <GameOverCard
        title="Vocabulary Hunter Selesai!"
        score={score}
        maxScore={vocabHunterItems.length * 100}
        xpEarned={50}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400">
          Soal {index + 1} dari {vocabHunterItems.length}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
          <Trophy className="w-3.5 h-3.5" /> Skor: {score}
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-3">
        <span className="text-[10px] font-black uppercase tracking-wider text-edu-blue bg-white px-2 py-0.5 rounded-full">
          {currentItem.category}
        </span>
        <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
          "{currentItem.definition}"
        </p>
        <p className="text-xs text-slate-500 italic">
          Padanan Indonesia: {currentItem.indonesianMeaning}
        </p>
        <div className="p-3 rounded-xl bg-white border border-sky-200/60 text-xs font-semibold text-slate-700">
          Contoh Konteks: {currentItem.sentenceExample}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentItem.options.map((opt, i) => {
          let btnStyle = 'bg-white border-slate-200 hover:border-edu-blue text-slate-800';
          if (isAnswered) {
            if (opt === currentItem.word) {
              btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
            } else if (opt === selectedOption) {
              btnStyle = 'bg-rose-50 border-rose-300 text-rose-800';
            }
          }

          return (
            <button
              key={i}
              disabled={isAnswered}
              onClick={() => handleSelect(opt)}
              className={`p-3.5 rounded-xl border text-sm font-bold transition-all text-center ${btnStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-edu-blue text-white font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <span>{index + 1 === vocabHunterItems.length ? 'Lihat Hasil Akhir' : 'Soal Berikutnya'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

// --- GAME 2: GRAMMAR BATTLE ---
const GrammarBattleGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const current = grammarBattleItems[index];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);

    if (idx === current.correctIndex) {
      setScore(s => s + 100);
    }
  };

  const handleNext = () => {
    if (index + 1 < grammarBattleItems.length) {
      setIndex(i => i + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setGameOver(true);
      triggerConfetti();
      onFinish(score, 60);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setScore(0);
    setSelectedOpt(null);
    setIsAnswered(false);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <GameOverCard
        title="Grammar Battle Selesai!"
        score={score}
        maxScore={grammarBattleItems.length * 100}
        xpEarned={60}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400">
          Ronde {index + 1} dari {grammarBattleItems.length}
        </span>
        <span className="text-xs font-black text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          Skor: {score}
        </span>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 text-center space-y-2">
        <span className="text-[10px] font-black uppercase text-purple-600">Lengkapi Kalimat Baku:</span>
        <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
          {current.sentence}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {current.options.map((opt, i) => {
          let style = 'bg-white border-slate-200 hover:border-purple-400 text-slate-800';
          if (isAnswered) {
            if (i === current.correctIndex) {
              style = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
            } else if (i === selectedOpt) {
              style = 'bg-rose-50 border-rose-300 text-rose-800';
            }
          }

          return (
            <button
              key={i}
              disabled={isAnswered}
              onClick={() => handleSelect(i)}
              className={`p-3.5 rounded-xl border text-sm font-semibold transition-all ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <span className="font-extrabold text-edu-purple">Aturan Grammar: </span>
            {current.rule}
          </div>
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 transition-colors"
          >
            {index + 1 === grammarBattleItems.length ? 'Lihat Hasil Battle' : 'Ronde Selanjutnya'}
          </button>
        </div>
      )}
    </div>
  );
};

// --- GAME 3: WORD MATCH CONNECT ---
const WordMatchGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const [selectedEnglish, setSelectedEnglish] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Shuffled items
  const englishList = wordMatchPairs;
  const [shuffledIndo] = useState(() => [...wordMatchPairs].sort(() => Math.random() - 0.5));

  const handleSelectEnglish = (id: string) => {
    if (matchedPairs.includes(id)) return;
    setSelectedEnglish(id);
  };

  const handleSelectIndonesian = (id: string) => {
    if (!selectedEnglish || matchedPairs.includes(id)) return;

    if (selectedEnglish === id) {
      // Correct match!
      const nextMatched = [...matchedPairs, id];
      setMatchedPairs(nextMatched);
      setScore(s => s + 100);
      setSelectedEnglish(null);

      if (nextMatched.length === wordMatchPairs.length) {
        setGameOver(true);
        triggerConfetti();
        onFinish(score + 100, 45);
      }
    } else {
      // Wrong match penalty
      setSelectedEnglish(null);
    }
  };

  const handleRestart = () => {
    setSelectedEnglish(null);
    setMatchedPairs([]);
    setScore(0);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <GameOverCard
        title="Word Match Selesai!"
        score={score}
        maxScore={wordMatchPairs.length * 100}
        xpEarned={45}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-black text-slate-800">Word Match Connect</h3>
          <p className="text-xs text-slate-400">Pilih kata bahasa Inggris lalu klik padanan artinya di sebelah kanan.</p>
        </div>
        <span className="text-xs font-black text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          Cocok: {matchedPairs.length} / {wordMatchPairs.length}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Left column: English terms */}
        <div className="space-y-2">
          <p className="text-[11px] font-black uppercase text-slate-400 px-1">English Term:</p>
          {englishList.map(item => {
            const isMatched = matchedPairs.includes(item.id);
            const isSelected = selectedEnglish === item.id;

            return (
              <button
                key={item.id}
                disabled={isMatched}
                onClick={() => handleSelectEnglish(item.id)}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-bold text-left transition-all ${
                  isMatched
                    ? 'bg-slate-100 text-slate-400 border-transparent line-through'
                    : isSelected
                    ? 'bg-edu-blue text-white border-edu-blue shadow-md'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-edu-blue'
                }`}
              >
                {item.english}
              </button>
            );
          })}
        </div>

        {/* Right column: Indonesian translations */}
        <div className="space-y-2">
          <p className="text-[11px] font-black uppercase text-slate-400 px-1">Padanan Indonesia:</p>
          {shuffledIndo.map(item => {
            const isMatched = matchedPairs.includes(item.id);

            return (
              <button
                key={item.id}
                disabled={isMatched}
                onClick={() => handleSelectIndonesian(item.id)}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-medium text-left transition-all ${
                  isMatched
                    ? 'bg-slate-100 text-slate-400 border-transparent line-through'
                    : selectedEnglish
                    ? 'bg-white border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-slate-800'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                {item.indonesian}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- GAME 4: READING DETECTIVE ---
const ReadingDetectiveGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const currentCase = readingDetectivePassages[0];
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    let earned = 0;
    currentCase.questions.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) {
        earned += 150;
      }
    });
    setScore(earned);
    setSubmitted(true);
    triggerConfetti();
    onFinish(earned, 70);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-black uppercase text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
          {currentCase.caseTitle}
        </span>
        <span className="text-xs font-bold text-slate-400">Kasus Investigasi #1</span>
      </div>

      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed max-h-64 overflow-y-auto whitespace-pre-line">
        {currentCase.passage}
      </div>

      <div className="space-y-4">
        {currentCase.questions.map((q, qIdx) => (
          <div key={qIdx} className="space-y-2">
            <p className="text-xs sm:text-sm font-bold text-slate-800">
              Pertanyaan {qIdx + 1}: {q.question}
            </p>
            <div className="space-y-1.5">
              {q.options.map((opt, optIdx) => {
                const isSelected = answers[qIdx] === optIdx;
                let style = 'bg-white border-slate-200 text-slate-700';

                if (submitted) {
                  if (optIdx === q.correctIndex) {
                    style = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
                  } else if (isSelected) {
                    style = 'bg-rose-50 border-rose-300 text-rose-800';
                  }
                } else if (isSelected) {
                  style = 'bg-edu-blue/10 border-edu-blue text-edu-blue font-bold';
                }

                return (
                  <button
                    key={optIdx}
                    disabled={submitted}
                    onClick={() => handleSelect(qIdx, optIdx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < currentCase.questions.length}
          className="w-full py-3.5 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 disabled:opacity-50 transition-all"
        >
          Kirim Jawaban Investigasi
        </button>
      ) : (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-2">
          <p className="text-sm font-black text-amber-900">Skor Investigasi: {score} / 300</p>
          <p className="text-xs text-amber-700">XP didapatkan: +70 XP</p>
        </div>
      )}
    </div>
  );
};

// --- GAME 5: ARRANGE THE SENTENCE ---
const ArrangeSentenceGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const [index, setIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const current = arrangeSentenceItems[index];

  // Initialize available words shuffled
  useEffect(() => {
    if (current) {
      setAvailableWords([...current.scrambled].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
      setIsAnswered(false);
      setIsCorrect(false);
    }
  }, [index, current]);

  const handlePickWord = (word: string, wIdx: number) => {
    setSelectedWords(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter((_, i) => i !== wIdx));
  };

  const handleRemoveWord = (word: string, wIdx: number) => {
    setAvailableWords(prev => [...prev, word]);
    setSelectedWords(prev => prev.filter((_, i) => i !== wIdx));
  };

  const handleCheck = () => {
    const constructed = selectedWords.join(' ');
    const match =
      constructed.toLowerCase() === current.correct.toLowerCase() ||
      current.acceptedAlternatives?.some(alt => alt.toLowerCase() === constructed.toLowerCase());

    setIsAnswered(true);
    setIsCorrect(Boolean(match));

    if (match) {
      setScore(s => s + 100);
    }
  };

  const handleNext = () => {
    if (index + 1 < arrangeSentenceItems.length) {
      setIndex(i => i + 1);
    } else {
      setGameOver(true);
      triggerConfetti();
      onFinish(score, 55);
    }
  };

  if (gameOver) {
    return (
      <GameOverCard
        title="Arrange the Sentence Selesai!"
        score={score}
        maxScore={arrangeSentenceItems.length * 100}
        xpEarned={55}
        onRestart={() => setIndex(0)}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400">
          Soal {index + 1} dari {arrangeSentenceItems.length}
        </span>
        <span className="text-xs font-black text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          Skor: {score}
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
        💡 <strong>Petunjuk:</strong> {current.hint}
      </div>

      {/* Drop zone / constructed sentence */}
      <div className="p-5 rounded-2xl bg-indigo-50/50 border-2 border-dashed border-indigo-200 min-h-[70px] flex flex-wrap items-center gap-2">
        {selectedWords.length > 0 ? (
          selectedWords.map((word, wIdx) => (
            <button
              key={wIdx}
              onClick={() => !isAnswered && handleRemoveWord(word, wIdx)}
              className="px-3 py-1.5 rounded-xl bg-edu-blue text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-rose-500 transition-colors"
            >
              {word}
            </button>
          ))
        ) : (
          <span className="text-xs text-slate-400 italic">
            Klik kata-kata di bawah sesuai urutan kalimat yang benar...
          </span>
        )}
      </div>

      {/* Available words bank */}
      <div className="flex flex-wrap gap-2">
        {availableWords.map((word, wIdx) => (
          <button
            key={wIdx}
            disabled={isAnswered}
            onClick={() => handlePickWord(word, wIdx)}
            className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:border-edu-blue hover:text-edu-blue shadow-2xs transition-all"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Result feedback */}
      {isAnswered && (
        <div
          className={`p-4 rounded-2xl text-xs sm:text-sm ${
            isCorrect
              ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
              : 'bg-rose-50 text-rose-900 border border-rose-300'
          }`}
        >
          <p className="font-black mb-1">
            {isCorrect ? 'Benar Sekali!' : 'Susunan Kurang Tepat'}
          </p>
          <p className="font-medium">
            Kalimat yang benar: <strong>"{current.correct}"</strong>
          </p>
        </div>
      )}

      {/* Action button */}
      {!isAnswered ? (
        <button
          onClick={handleCheck}
          disabled={selectedWords.length === 0}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-sm hover:opacity-95 disabled:opacity-50 transition-all"
        >
          Periksa Susunan Kalimat
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          <span>Lanjut Soal Berikutnya</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

// --- GAME 6: MATH SPEED CHALLENGE (60 seconds countdown) ---
const MathSpeedGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const current = mathSpeedItems[index % mathSpeedItems.length];

  // Timer loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    if (timeLeft <= 0) {
      setGameOver(true);
      triggerConfetti();
      onFinish(score, 65);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameOver, timeLeft, score, onFinish, triggerConfetti]);

  const handleSelect = (chosenIdx: number) => {
    if (chosenIdx === current.correctIndex) {
      setScore(s => s + 100);
    }
    // advance immediately
    if (index + 1 < mathSpeedItems.length) {
      setIndex(i => i + 1);
    } else {
      setGameOver(true);
      triggerConfetti();
      onFinish(score + 100, 65);
    }
  };

  const handleStart = () => {
    setIndex(0);
    setScore(0);
    setTimeLeft(60);
    setGameStarted(true);
    setGameOver(false);
  };

  if (!gameStarted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-100 shadow-card text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 mb-2">
          <Zap className="w-8 h-8 fill-amber-500" />
        </div>
        <h3 className="text-2xl font-black text-slate-800">Math Speed Challenge</h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          Kamu memiliki waktu <strong>60 detik</strong> untuk menyelesaikan soal-soal hitung cepat aljabar, persentase, dan rumus praktis. Siap uji ketangkasan otakmu?
        </p>
        <button
          onClick={handleStart}
          className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          Mulai Timer 60 Detik!
        </button>
      </div>
    );
  }

  if (gameOver) {
    return (
      <GameOverCard
        title="Waktu Habis! Math Speed Selesai!"
        score={score}
        maxScore={mathSpeedItems.length * 100}
        xpEarned={65}
        onRestart={handleStart}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        {/* Countdown Timer Bar */}
        <div className="flex items-center gap-2">
          <Clock className={`w-5 h-5 ${timeLeft < 15 ? 'text-rose-500 animate-ping' : 'text-amber-500'}`} />
          <span className={`text-base font-black ${timeLeft < 15 ? 'text-rose-600' : 'text-slate-800'}`}>
            {timeLeft} Detik
          </span>
        </div>

        <span className="text-sm font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
          Skor: {score}
        </span>
      </div>

      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ${timeLeft < 15 ? 'bg-rose-500' : 'bg-amber-400'}`}
          style={{ width: `${(timeLeft / 60) * 100}%` }}
        />
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-center">
        <p className="text-xs font-bold text-amber-700 uppercase mb-1">Soal #{index + 1}</p>
        <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          {current.question}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className="p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-800 font-black text-sm sm:text-base shadow-sm active:scale-95 transition-all text-center"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- GAME 7: FORMULA MASTER ---
const FormulaMasterGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const formulas = formulaMasterPairs;
  const [shuffledApplications] = useState(() =>
    [...formulaMasterPairs].sort(() => Math.random() - 0.5)
  );

  const handleMatch = (appId: string) => {
    if (!selectedFormula) return;

    if (selectedFormula === appId) {
      const nextMatched = [...matched, appId];
      setMatched(nextMatched);
      setScore(s => s + 100);
      setSelectedFormula(null);

      if (nextMatched.length === formulas.length) {
        setGameOver(true);
        triggerConfetti();
        onFinish(score + 100, 50);
      }
    } else {
      setSelectedFormula(null);
    }
  };

  if (gameOver) {
    return (
      <GameOverCard
        title="Formula Master Tuntas!"
        score={score}
        maxScore={formulaMasterPairs.length * 100}
        xpEarned={50}
        onRestart={() => {
          setMatched([]);
          setSelectedFormula(null);
          setScore(0);
          setGameOver(false);
        }}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-black text-slate-800">Formula Master</h3>
          <p className="text-xs text-slate-400">Pilih rumus matematika, lalu hubungkan dengan kasus pemakaiannya.</p>
        </div>
        <span className="text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
          Cocok: {matched.length} / {formulas.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Formulas list */}
        <div className="space-y-2">
          <p className="text-[11px] font-black uppercase text-slate-400">Nama Rumus:</p>
          {formulas.map(f => {
            const isDone = matched.includes(f.id);
            const isSelected = selectedFormula === f.id;

            return (
              <button
                key={f.id}
                disabled={isDone}
                onClick={() => setSelectedFormula(f.id)}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-bold text-left transition-all ${
                  isDone
                    ? 'bg-slate-100 text-slate-400 border-transparent line-through'
                    : isSelected
                    ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-amber-400'
                }`}
              >
                <p className="leading-tight">{f.name}</p>
                <p className="text-[11px] font-mono opacity-80 mt-0.5">{f.formula}</p>
              </button>
            );
          })}
        </div>

        {/* Applications list */}
        <div className="space-y-2">
          <p className="text-[11px] font-black uppercase text-slate-400">Kasus Penggunaan / Fungsi:</p>
          {shuffledApplications.map(f => {
            const isDone = matched.includes(f.id);

            return (
              <button
                key={f.id}
                disabled={isDone}
                onClick={() => handleMatch(f.id)}
                className={`w-full p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                  isDone
                    ? 'bg-slate-100 text-slate-400 border-transparent line-through'
                    : selectedFormula
                    ? 'bg-white border-slate-300 hover:border-amber-500 hover:bg-amber-50 text-slate-800'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                {f.application}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- GAME 8: MATH PATTERN PUZZLE ---
const MathPuzzleGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const current = mathPuzzleItems[index];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);

    if (idx === current.correctIndex) {
      setScore(s => s + 100);
    }
  };

  const handleNext = () => {
    if (index + 1 < mathPuzzleItems.length) {
      setIndex(i => i + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setGameOver(true);
      triggerConfetti();
      onFinish(score, 65);
    }
  };

  if (gameOver) {
    return (
      <GameOverCard
        title="Math Puzzle Tuntas!"
        score={score}
        maxScore={mathPuzzleItems.length * 100}
        xpEarned={65}
        onRestart={() => {
          setIndex(0);
          setScore(0);
          setSelectedOpt(null);
          setIsAnswered(false);
          setGameOver(false);
        }}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400">
          Teka-Teki {index + 1} dari {mathPuzzleItems.length}
        </span>
        <span className="text-xs font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
          Skor: {score}
        </span>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 text-center space-y-2">
        <span className="text-xs font-bold text-rose-600 uppercase">{current.title}</span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight font-mono">
          {current.sequenceDisplay}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {current.options.map((opt, i) => {
          let style = 'bg-white border-slate-200 text-slate-800 hover:border-rose-400';
          if (isAnswered) {
            if (i === current.correctIndex) {
              style = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
            } else if (i === selectedOpt) {
              style = 'bg-rose-50 border-rose-300 text-rose-800';
            }
          }

          return (
            <button
              key={i}
              disabled={isAnswered}
              onClick={() => handleSelect(i)}
              className={`p-4 rounded-xl border text-sm sm:text-base font-bold transition-all ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <span className="font-extrabold text-rose-600">Penjelasan Pola: </span>
            {current.explanation}
          </div>
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-rose-600 text-white font-bold text-sm hover:bg-rose-700 transition-colors"
          >
            Teka-Teki Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
};

// --- GAME 9: EQUATION STEP SOLVER ---
const EquationSolverGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const scenario = equationSolverScenarios[0];
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const currentStep = scenario.steps[stepIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentStep.correctIndex) {
      setScore(s => s + 100);
    }
  };

  const handleNext = () => {
    if (stepIndex + 1 < scenario.steps.length) {
      setStepIndex(s => s + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setGameOver(true);
      triggerConfetti();
      onFinish(score + 100, 75);
    }
  };

  if (gameOver) {
    return (
      <GameOverCard
        title="Equation Step Solver Selesai!"
        score={score}
        maxScore={scenario.steps.length * 100}
        xpEarned={75}
        onRestart={() => {
          setStepIndex(0);
          setSelectedOption(null);
          setIsAnswered(false);
          setScore(0);
          setGameOver(false);
        }}
      />
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400">
          Tahap {stepIndex + 1} dari {scenario.steps.length}
        </span>
        <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Skor: {score}
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-center space-y-1">
        <span className="text-[10px] font-black uppercase text-edu-blue">Persamaan:</span>
        <h3 className="text-lg font-black text-slate-800">{scenario.equationTitle}</h3>
      </div>

      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-800">
        {currentStep.prompt}
      </div>

      <div className="space-y-2">
        {currentStep.options.map((opt, i) => {
          let style = 'bg-white border-slate-200 text-slate-700 hover:border-edu-blue';
          if (isAnswered) {
            if (i === currentStep.correctIndex) {
              style = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
            } else if (i === selectedOption) {
              style = 'bg-rose-50 border-rose-300 text-rose-800';
            }
          }

          return (
            <button
              key={i}
              disabled={isAnswered}
              onClick={() => handleSelect(i)}
              className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-edu-blue text-white font-bold text-sm hover:bg-blue-600 transition-colors"
        >
          Langkah Selanjutnya
        </button>
      )}
    </div>
  );
};

// --- GAME 10: MIXED SUBJECT CHALLENGE ---
const MixedSubjectChallengeGame: React.FC<{
  onFinish: (score: number, xp: number) => void;
  triggerConfetti: () => void;
}> = ({ onFinish, triggerConfetti }) => {
  const mission = mixedSubjectMissions[0];
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (cIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [cIdx]: optIdx }));
  };

  const handleSubmit = () => {
    let earned = 0;
    mission.challenges.forEach((c, idx) => {
      if (answers[idx] === c.correctIndex) {
        earned += 100;
      }
    });
    setScore(earned);
    setSubmitted(true);
    triggerConfetti();
    onFinish(earned, 90);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-black uppercase text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          Misi Gabungan SMK
        </span>
        <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md">
          +90 XP Reward
        </span>
      </div>

      <h3 className="text-xl font-black text-slate-800">{mission.missionTitle}</h3>

      <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line shadow-inner">
        {mission.briefing}
      </div>

      <div className="space-y-4">
        {mission.challenges.map((c, cIdx) => (
          <div key={cIdx} className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-xs sm:text-sm font-bold text-slate-800">
              Tantangan #{cIdx + 1}: {c.question}
            </p>
            <div className="space-y-1.5">
              {c.options.map((opt, optIdx) => {
                const isSelected = answers[cIdx] === optIdx;
                let style = 'bg-white border-slate-200 text-slate-700';

                if (submitted) {
                  if (optIdx === c.correctIndex) {
                    style = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
                  } else if (isSelected) {
                    style = 'bg-rose-50 border-rose-300 text-rose-800';
                  }
                } else if (isSelected) {
                  style = 'bg-purple-100 border-purple-500 text-purple-900 font-bold';
                }

                return (
                  <button
                    key={optIdx}
                    disabled={submitted}
                    onClick={() => handleSelect(cIdx, optIdx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < mission.challenges.length}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm hover:opacity-95 disabled:opacity-50 transition-all shadow-md"
        >
          Kirim Solusi Misi Gabungan
        </button>
      ) : (
        <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-1">
          <p className="text-sm font-black text-purple-950">Misi Selesai! Skor: {score} / 300</p>
          <p className="text-xs text-purple-700">+90 XP telah ditambahkan ke profilmu!</p>
        </div>
      )}
    </div>
  );
};

// --- COMMON GAME OVER CARD ---
const GameOverCard: React.FC<{
  title: string;
  score: number;
  maxScore: number;
  xpEarned: number;
  onRestart: () => void;
}> = ({ title, score, maxScore, xpEarned, onRestart }) => {
  const percent = Math.round((score / Math.max(1, maxScore)) * 100);

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-100 shadow-floating text-center space-y-4 animate-in zoom-in-95 duration-200">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-100 text-amber-600 mb-2">
        <Trophy className="w-10 h-10 fill-amber-400" />
      </div>

      <h3 className="text-2xl font-black text-slate-800 tracking-tight">{title}</h3>

      <div className="flex items-center justify-center gap-6 my-4">
        <div>
          <p className="text-2xl font-black text-slate-800">{score}</p>
          <p className="text-xs font-semibold text-slate-400">Skor Akhir</p>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <div>
          <p className="text-2xl font-black text-emerald-600">{percent}%</p>
          <p className="text-xs font-semibold text-slate-400">Akurasi</p>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <div>
          <p className="text-2xl font-black text-amber-600">+{xpEarned} XP</p>
          <p className="text-xs font-semibold text-slate-400">Reward Diraih</p>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={onRestart}
          className="py-3 px-6 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Mainkan Lagi (Retry)</span>
        </button>
      </div>
    </div>
  );
};

