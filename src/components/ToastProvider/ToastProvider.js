import { createContext, useState } from 'react';

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
    const toastCopy = [...toasts];
    const toastIndex = toastCopy.findIndex((toast) => toast.id === toastId);
    toastCopy.splice(toastIndex, 1);
    setToasts(toastCopy);
  };

  const dismissAllToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        closeToast,
        dismissAllToasts,
        setToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
