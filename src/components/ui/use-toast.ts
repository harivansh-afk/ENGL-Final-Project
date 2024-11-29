import { useState, useEffect } from 'react';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

interface ToastOptions {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
  duration?: number;
}

const DEFAULT_TOAST_DURATION = 5000; // 5 seconds

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const timeouts = toasts.map((toast) => {
      return setTimeout(() => {
        setToasts((current) => current.filter((t) => t.id !== toast.id));
      }, DEFAULT_TOAST_DURATION);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [toasts]);

  function toast(options: ToastOptions) {
    const id = Math.random().toString(36).slice(2);
    setToasts((current) => [
      ...current,
      {
        id,
        ...options,
      },
    ]);
  }

  function dismiss(toastId: string) {
    setToasts((current) => current.filter((t) => t.id !== toastId));
  }

  return {
    toasts,
    toast,
    dismiss,
  };
}
