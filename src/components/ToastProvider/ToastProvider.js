import { createContext, useState } from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, variant) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToasts([...toasts, newToast]);
  };

  const closeToast = (toastId) => {
    const newToasts = toasts.filter((toast) => toast.id !== toastId);
    setToasts(newToasts);
  };

  useEscapeKey(setToasts([]));

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        closeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
