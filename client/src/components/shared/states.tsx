import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm text-muted-foreground animate-pulse">Memuat data...</p>
    </div>
  );
}

export function EmptyState({ title, message, icon = "📭", action }: { title: string; message: string; icon?: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center glass-tile max-w-lg mx-auto">
      <span className="text-6xl mb-4 opacity-80">{icon}</span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{message}</p>
      {action && <div>{action}</div>}
    </div>
  );
}

export function ErrorState({ message, retry }: { message: string; retry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border border-red-500/20 bg-red-500/5 rounded-2xl max-w-lg mx-auto">
      <span className="text-4xl mb-3">⚠️</span>
      <h3 className="text-lg font-bold text-red-400 mb-2">Terjadi Kesalahan</h3>
      <p className="text-sm text-muted-foreground mb-4">{message}</p>
      {retry && (
        <button onClick={retry} className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors text-sm font-semibold">
          Coba Lagi
        </button>
      )}
    </div>
  );
}
