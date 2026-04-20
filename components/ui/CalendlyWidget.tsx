'use client';

import React, { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyWidgetProps {
  calendlyUrl?: string;
  buttonText?: string;
  className?: string;
}

export default function CalendlyWidget({
  calendlyUrl = 'https://calendly.com/dginternational2022',
  buttonText = 'Book Strategy Call',
  className = '',
}: CalendlyWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={`
          bg-gradient-to-r from-amber-500 to-yellow-500
          hover:from-amber-600 hover:to-yellow-600
          text-black font-semibold px-6 py-3 rounded-lg
          transition-all duration-200 transform hover:scale-105
          shadow-lg hover:shadow-xl
          ${className}
        `}
      >
        {buttonText}
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`
          bg-gradient-to-r from-amber-500 to-yellow-500
          hover:from-amber-600 hover:to-yellow-600
          text-black font-semibold px-6 py-3 rounded-lg
          transition-all duration-200 transform hover:scale-105
          shadow-lg hover:shadow-xl
          ${className}
        `}
      >
        {buttonText}
      </button>

      <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('__next') || document.body}
      />
    </>
  );
}
