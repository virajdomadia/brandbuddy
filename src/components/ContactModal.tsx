"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ContactForm } from "./contact-form";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#contact") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      const href = anchor?.getAttribute('href');
      // Look for any link ending with #contact
      if (href && href.endsWith('#contact')) {
        setIsOpen(true);
      }
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Don't unset if mobile menu is actively managing it (simplistic fix, could just use unset)
      if (!document.querySelector('.mobile-menu.active')) {
        document.body.style.overflow = "unset";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    // Clean up URL without jumping
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            style={{ borderRadius: '4px' }}
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
              <h2 className="text-3xl font-display font-bold uppercase tracking-wide text-white m-0 leading-none">
                Start a <span className="text-[#D4FF00]">Project</span>
              </h2>
              <button 
                onClick={close}
                className="p-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto w-full flex justify-center">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
