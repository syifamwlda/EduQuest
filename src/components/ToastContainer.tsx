import React from 'react';
import { CheckCircle2, Zap, Trophy, Info, X } from 'lucide-react';
import { useEduQuest, ToastMessage } from '../context/EduQuestContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useEduQuest();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onRemove: () => void }> = ({ toast, onRemove }) => {
  const getIcon = () => {
    switch (toast.type) {
      case 'xp':
        return <Zap className="w-5 h-5 text-amber-500 fill-amber-400 animate-bounce-subtle" />;
      case 'badge':
        return <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-300" />;
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      default:
        return <Info className="w-5 h-5 text-edu-blue" />;
    }
  };

  const getBorderColor = () => {
    switch (toast.type) {
      case 'xp':
        return 'border-amber-300/80 bg-gradient-to-r from-amber-50/95 to-yellow-50/95';
      case 'badge':
        return 'border-purple-300/80 bg-gradient-to-r from-purple-50/95 to-pink-50/95';
      case 'success':
        return 'border-emerald-300/80 bg-gradient-to-r from-emerald-50/95 to-teal-50/95';
      default:
        return 'border-blue-200/80 bg-white/95';
    }
  };

  return (
    <div
      className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl shadow-floating border backdrop-blur-md transition-all duration-300 animate-in slide-in-from-bottom-5 ${getBorderColor()}`}
    >
      <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-bold text-slate-800">{toast.title}</p>
          {toast.xpAmount && (
            <span className="text-[10px] font-black px-1.5 py-0.2 bg-amber-500 text-white rounded-md">
              +{toast.xpAmount} XP
            </span>
          )}
        </div>
        <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{toast.message}</p>
      </div>
      <button
        onClick={onRemove}
        className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

