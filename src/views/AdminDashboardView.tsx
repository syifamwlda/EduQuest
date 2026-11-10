import React, { useState } from 'react';
import {
  ShieldAlert,
  BookOpen,
  HelpCircle,
  Users,
  MessageSquare,
  Plus,
  Trash2,
  Edit,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Search
} from 'lucide-react';
import { useEduQuest } from '../context/EduQuestContext';
import { LearningMaterial, QuizQuestion, SubjectType, DifficultyLevel } from '../types';

export const AdminDashboardView: React.FC = () => {
  const {
    materials,
    addMaterial,
    updateMaterial,
    deleteMaterial,
    quizzes,
    addQuiz,
    updateQuiz,
    deleteQuiz,
    communityPosts,
    deleteCommunityPost,
    allUsers,
    showToast
  } = useEduQuest();

  const [activeTab, setActiveTab] = useState<'materials' | 'quizzes' | 'community' | 'users'>('materials');

  // Search filter
  const [searchTerm, setSearchTerm] = useState('');

  // Add / Edit Material Modal State
  const [editingMaterial, setEditingMaterial] = useState<LearningMaterial | null>(null);
  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false);

  // Material Form fields
  const [matSubject, setMatSubject] = useState<SubjectType>('english');
  const [matCategory, setMatCategory] = useState('Grammar Fundamentals');
  const [matTitle, setMatTitle] = useState('');
  const [matDesc, setMatDesc] = useState('');
  const [matDifficulty, setMatDifficulty] = useState<DifficultyLevel>('Beginner');
  const [matDuration, setMatDuration] = useState(15);
  const [matXP, setMatXP] = useState(50);
  const [matIntro, setMatIntro] = useState('');

  // Add / Edit Quiz Modal State
  const [editingQuiz, setEditingQuiz] = useState<QuizQuestion | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // Quiz Form fields
  const [quizSubject, setQuizSubject] = useState<SubjectType>('english');
  const [quizTopic, setQuizTopic] = useState('Grammar');
  const [quizQuestionText, setQuizQuestionText] = useState('');
  const [quizOpt0, setQuizOpt0] = useState('');
  const [quizOpt1, setQuizOpt1] = useState('');
  const [quizOpt2, setQuizOpt2] = useState('');
  const [quizOpt3, setQuizOpt3] = useState('');
  const [quizCorrectIdx, setQuizCorrectIdx] = useState(0);
  const [quizExplanation, setQuizExplanation] = useState('');
  const [quizXP, setQuizXP] = useState(15);

  // Open add material modal
  const handleOpenAddMaterial = () => {
    setEditingMaterial(null);
    setMatSubject('english');
    setMatCategory('Grammar Fundamentals');
    setMatTitle('');
    setMatDesc('');
    setMatDifficulty('Beginner');
    setMatDuration(15);
    setMatXP(50);
    setMatIntro('');
    setIsMaterialModalOpen(true);
  };

  // Open edit material modal
  const handleOpenEditMaterial = (m: LearningMaterial) => {
    setEditingMaterial(m);
    setMatSubject(m.subject);
    setMatCategory(m.category);
    setMatTitle(m.title);
    setMatDesc(m.description);
    setMatDifficulty(m.difficulty);
    setMatDuration(m.estimatedMinutes);
    setMatXP(m.xpReward);
    setMatIntro(m.introduction);
    setIsMaterialModalOpen(true);
  };

  const handleSaveMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matTitle.trim() || !matDesc.trim()) return;

    if (editingMaterial) {
      updateMaterial({
        ...editingMaterial,
        subject: matSubject,
        category: matCategory,
        title: matTitle.trim(),
        description: matDesc.trim(),
        difficulty: matDifficulty,
        estimatedMinutes: Number(matDuration),
        xpReward: Number(matXP),
        introduction: matIntro.trim() || editingMaterial.introduction
      });
    } else {
      const newId = (matSubject === 'english' ? 'eng-' : 'mat-') + Date.now().toString().slice(-4);
      addMaterial({
        id: newId,
        subject: matSubject,
        category: matCategory,
        title: matTitle.trim(),
        description: matDesc.trim(),
        difficulty: matDifficulty,
        estimatedMinutes: Number(matDuration),
        xpReward: Number(matXP),
        objectives: ['Menguasai konsep dasar materi.', 'Menerapkan dalam konteks kejuruan.'],
        introduction: matIntro.trim() || 'Modul ini dirancang khusus untuk kurikulum SMK.',
        sections: [
          {
            title: 'Penjelasan Pokok Materi',
            content: matDesc.trim()
          }
        ],
        practiceQuestions: [],
        summary: ['Materi telah dirangkum untuk persiapan ujian kompetensi.'],
        relatedIds: []
      });
    }

    setIsMaterialModalOpen(false);
  };

  // Open add quiz modal
  const handleOpenAddQuiz = () => {
    setEditingQuiz(null);
    setQuizSubject('english');
    setQuizTopic('Grammar');
    setQuizQuestionText('');
    setQuizOpt0('');
    setQuizOpt1('');
    setQuizOpt2('');
    setQuizOpt3('');
    setQuizCorrectIdx(0);
    setQuizExplanation('');
    setQuizXP(15);
    setIsQuizModalOpen(true);
  };

  const handleOpenEditQuiz = (q: QuizQuestion) => {
    setEditingQuiz(q);
    setQuizSubject(q.subject);
    setQuizTopic(q.topic);
    setQuizQuestionText(q.question);
    setQuizOpt0(q.options[0] || '');
    setQuizOpt1(q.options[1] || '');
    setQuizOpt2(q.options[2] || '');
    setQuizOpt3(q.options[3] || '');
    setQuizCorrectIdx(q.correctIndex);
    setQuizExplanation(q.explanation);
    setQuizXP(q.xpReward);
    setIsQuizModalOpen(true);
  };

  const handleSaveQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizQuestionText.trim() || !quizOpt0.trim() || !quizOpt1.trim()) return;

    const opts = [quizOpt0.trim(), quizOpt1.trim(), quizOpt2.trim(), quizOpt3.trim()].filter(Boolean);

    if (editingQuiz) {
      updateQuiz({
        ...editingQuiz,
        subject: quizSubject,
        topic: quizTopic,
        category: quizTopic,
        question: quizQuestionText.trim(),
        options: opts,
        correctIndex: quizCorrectIdx,
        explanation: quizExplanation.trim(),
        xpReward: Number(quizXP)
      });
    } else {
      const newId = (quizSubject === 'english' ? 'eq-' : 'mq-') + Date.now().toString().slice(-4);
      addQuiz({
        id: newId,
        subject: quizSubject,
        topic: quizTopic,
        category: quizTopic,
        difficulty: 'Intermediate',
        question: quizQuestionText.trim(),
        options: opts,
        correctIndex: quizCorrectIdx,
        explanation: quizExplanation.trim(),
        xpReward: Number(quizXP)
      });
    }

    setIsQuizModalOpen(false);
  };

  const handleResetData = () => {
    if (window.confirm('Reset semua data prototype ke pengaturan awal (LocalStorage)?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Admin Notice Banner */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-floating flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black">EduQuest Prototype Administrator CMS</h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-500 text-slate-900">
                Mock Admin
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Panel manajemen konten (CRUD) untuk modul materi, soal kuis, dan kiriman komunitas. Perubahan tersimpan secara persisten pada browser LocalStorage.
            </p>
          </div>
        </div>

        <button
          onClick={handleResetData}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-rose-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset ke Data Bawaan</span>
        </button>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('materials')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'materials'
              ? 'bg-edu-blue text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Kelola Modul Materi ({materials.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('quizzes')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'quizzes'
              ? 'bg-edu-blue text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Bank Soal Kuis ({quizzes.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('community')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'community'
              ? 'bg-edu-blue text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Kiriman Komunitas ({communityPosts.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'users'
              ? 'bg-edu-blue text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Akun Siswa Demo ({allUsers.length})</span>
        </button>
      </div>

      {/* 1. MATERIALS MANAGEMENT SUBTAB */}
      {activeTab === 'materials' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleOpenAddMaterial}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Modul Baru</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-extrabold uppercase">
                    <th className="p-3.5">ID & Mapel</th>
                    <th className="p-3.5">Judul Modul</th>
                    <th className="p-3.5">Kategori</th>
                    <th className="p-3.5">Level</th>
                    <th className="p-3.5">Durasi</th>
                    <th className="p-3.5">Reward XP</th>
                    <th className="p-3.5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {materials.map(m => (
                    <tr key={m.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] ${
                            m.subject === 'english'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {m.subject.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-3.5 font-bold text-slate-800 max-w-xs truncate">
                        {m.title}
                      </td>
                      <td className="p-3.5 text-slate-500">{m.category}</td>
                      <td className="p-3.5">{m.difficulty}</td>
                      <td className="p-3.5">{m.estimatedMinutes} Menit</td>
                      <td className="p-3.5 font-black text-amber-600">+{m.xpReward} XP</td>
                      <td className="p-3.5 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => handleOpenEditMaterial(m)}
                            className="p-1.5 rounded-lg text-edu-blue hover:bg-blue-50"
                            title="Edit Modul"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Hapus modul "${m.title}"?`)) {
                                deleteMaterial(m.id);
                              }
                            }}
                            className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                            title="Hapus Modul"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 2. QUIZZES MANAGEMENT SUBTAB */}
      {activeTab === 'quizzes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleOpenAddQuiz}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-sm hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Soal Kuis Baru</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-extrabold uppercase">
                    <th className="p-3.5">ID & Mapel</th>
                    <th className="p-3.5">Topik</th>
                    <th className="p-3.5">Teks Soal</th>
                    <th className="p-3.5">Kunci Jawaban</th>
                    <th className="p-3.5">XP</th>
                    <th className="p-3.5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {quizzes.map(q => (
                    <tr key={q.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-bold">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] ${
                            q.subject === 'english'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {q.id}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-500 font-semibold">{q.topic}</td>
                      <td className="p-3.5 font-bold text-slate-800 max-w-sm truncate">
                        {q.question}
                      </td>
                      <td className="p-3.5 font-bold text-emerald-600 max-w-xs truncate">
                        {q.options[q.correctIndex]}
                      </td>
                      <td className="p-3.5 font-black text-amber-600">+{q.xpReward} XP</td>
                      <td className="p-3.5 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => handleOpenEditQuiz(q)}
                            className="p-1.5 rounded-lg text-edu-blue hover:bg-blue-50"
                            title="Edit Soal"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm('Hapus soal kuis ini?')) {
                                deleteQuiz(q.id);
                              }
                            }}
                            className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                            title="Hapus Soal"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. COMMUNITY MODERATION */}
      {activeTab === 'community' && (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-card p-6 space-y-4">
          <h3 className="text-base font-black text-slate-800">Moderasi Catatan Komunitas</h3>
          <div className="divide-y divide-slate-100">
            {communityPosts.map(post => (
              <div key={post.id} className="py-4 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-slate-800">{post.title}</span>
                    <span className="text-slate-400 font-medium">oleh {post.authorName}</span>
                  </div>
                  <p className="text-slate-500 line-clamp-1 mt-0.5">{post.content}</p>
                </div>
                <button
                  onClick={() => {
                    if (window.confirm('Hapus kiriman ini dari komunitas?')) {
                      deleteCommunityPost(post.id);
                    }
                  }}
                  className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl"
                  title="Hapus Kiriman"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. USERS MANAGEMENT */}
      {activeTab === 'users' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allUsers.map(u => (
            <div key={u.id} className="p-5 rounded-3xl bg-white border border-slate-100 shadow-card space-y-3">
              <div className="flex items-center gap-3">
                <img src={u.avatar} alt={u.name} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100" />
                <div>
                  <h4 className="text-sm font-black text-slate-800">{u.name}</h4>
                  <p className="text-[11px] text-slate-400">{u.school}</p>
                  <p className="text-[10px] text-edu-blue font-bold">{u.major}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-slate-100 text-xs">
                <div className="p-2 rounded-xl bg-slate-50">
                  <p className="font-black text-slate-800">{u.xp} XP</p>
                  <p className="text-[10px] text-slate-400">Total XP</p>
                </div>
                <div className="p-2 rounded-xl bg-slate-50">
                  <p className="font-black text-slate-800">Level {u.level}</p>
                  <p className="text-[10px] text-slate-400">Tingkat</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Material Modal */}
      {isMaterialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-4 animate-in zoom-in-95 duration-150 max-h-[85vh] overflow-y-auto">
            <h3 className="text-xl font-black text-slate-800">
              {editingMaterial ? 'Edit Modul Pembelajaran' : 'Tambah Modul Pembelajaran Baru'}
            </h3>

            <form onSubmit={handleSaveMaterial} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mata Pelajaran</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setMatSubject('english')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      matSubject === 'english'
                        ? 'bg-edu-blue text-white border-edu-blue'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    Bahasa Inggris
                  </button>
                  <button
                    type="button"
                    onClick={() => setMatSubject('mathematics')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      matSubject === 'mathematics'
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    Matematika SMK
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Judul Modul</label>
                <input
                  type="text"
                  required
                  value={matTitle}
                  onChange={e => setMatTitle(e.target.value)}
                  placeholder="Misal: Passive Voice in Workshop Manuals..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Kategori</label>
                <input
                  type="text"
                  required
                  value={matCategory}
                  onChange={e => setMatCategory(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Deskripsi Singkat</label>
                <textarea
                  required
                  rows={2}
                  value={matDesc}
                  onChange={e => setMatDesc(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-edu-blue"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Tingkat</label>
                  <select
                    value={matDifficulty}
                    onChange={e => setMatDifficulty(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs outline-none"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Durasi (m)</label>
                  <input
                    type="number"
                    value={matDuration}
                    onChange={e => setMatDuration(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Reward XP</label>
                  <input
                    type="number"
                    value={matXP}
                    onChange={e => setMatXP(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsMaterialModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-edu-blue text-white font-bold text-xs sm:text-sm hover:bg-blue-600 shadow-md"
                >
                  Simpan Modul
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      {isQuizModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-4 animate-in zoom-in-95 duration-150 max-h-[85vh] overflow-y-auto">
            <h3 className="text-xl font-black text-slate-800">
              {editingQuiz ? 'Edit Soal Kuis' : 'Tambah Soal Kuis Baru'}
            </h3>

            <form onSubmit={handleSaveQuiz} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mata Pelajaran</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setQuizSubject('english')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      quizSubject === 'english'
                        ? 'bg-edu-blue text-white border-edu-blue'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    Bahasa Inggris
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuizSubject('mathematics')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      quizSubject === 'mathematics'
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    Matematika SMK
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Topik</label>
                <input
                  type="text"
                  required
                  value={quizTopic}
                  onChange={e => setQuizTopic(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-edu-blue"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Teks Pertanyaan</label>
                <textarea
                  required
                  rows={2}
                  value={quizQuestionText}
                  onChange={e => setQuizQuestionText(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-edu-blue"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">Pilihan Jawaban (A, B, C, D)</label>
                <input
                  type="text"
                  required
                  placeholder="Opsi 1"
                  value={quizOpt0}
                  onChange={e => setQuizOpt0(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                />
                <input
                  type="text"
                  required
                  placeholder="Opsi 2"
                  value={quizOpt1}
                  onChange={e => setQuizOpt1(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                />
                <input
                  type="text"
                  placeholder="Opsi 3"
                  value={quizOpt2}
                  onChange={e => setQuizOpt2(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                />
                <input
                  type="text"
                  placeholder="Opsi 4"
                  value={quizOpt3}
                  onChange={e => setQuizOpt3(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Kunci Jawaban Benar</label>
                  <select
                    value={quizCorrectIdx}
                    onChange={e => setQuizCorrectIdx(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs outline-none"
                  >
                    <option value={0}>Opsi 1</option>
                    <option value={1}>Opsi 2</option>
                    <option value={2}>Opsi 3</option>
                    <option value={3}>Opsi 4</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Reward XP</label>
                  <input
                    type="number"
                    value={quizXP}
                    onChange={e => setQuizXP(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Penjelasan / Pembahasan</label>
                <textarea
                  rows={2}
                  value={quizExplanation}
                  onChange={e => setQuizExplanation(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-edu-blue"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsQuizModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs sm:text-sm hover:bg-purple-700 shadow-md"
                >
                  Simpan Soal Kuis
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

