'use client';

import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

/**
 * WhatsAppButton - A floating WhatsApp chat button
 * Fixed in bottom-right corner with gold accent color
 */
export default function WhatsAppButton() {
  const phoneNumber = '919997906055';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Quick questions?
          {/* Tooltip arrow */}
          <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
        </span>

        {/* WhatsApp Button */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
          style={{
            backgroundColor: '#D4AF37',
          }}
        >
          <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  );
}
