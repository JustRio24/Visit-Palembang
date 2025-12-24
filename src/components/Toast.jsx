import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-fadeInOut">
      {message}
    </div>
  );
}
