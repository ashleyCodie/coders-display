// src/hooks/UseToast.jsx
import { useState } from 'react';

export function useToast() {  // Changed to lowercase 'u'
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description, variant = 'default' }) => {
    const id = Date.now();
    const newToast = { id, title, description, variant };
    
    setToasts((prev) => [...prev, newToast]);

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return { toast, toasts };
}