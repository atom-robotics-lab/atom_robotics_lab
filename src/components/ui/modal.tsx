import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../hooks/use-outside-click';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;  // This allows you to pass children
  title: string;

}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling on the body
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling on the body
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useOutsideClick(containerRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        ref={containerRef}
        className="max-w-5xl mx-auto bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
        style={{
          marginTop: '100px',
          maxHeight: '90vh',
          overflowY: 'auto',
          overflowX: 'hidden', // Hide horizontal scrollbar if content overflows
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // Internet Explorer and Edge
        }}
      >
        {/* Custom scrollbar styles for webkit browsers */}
        <style jsx>{`
          ::-webkit-scrollbar {
            display: none; // Hide scrollbar for Chrome, Safari, and Opera
          }
        `}</style>

        <button
          className="top-4 h-8 w-8 right-0 ml-auto bg-black rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          <X className="h-6 w-6 text-neutral-100" />
        </button>
        <div className="text-base font-medium text-white">
          <h2 className="text-2xl md:text-5xl font-semibold text-white mt-4">
            {title}
          </h2>
        </div>
        <div className="py-10">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
