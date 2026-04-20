'use client';

import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailJSInit() {
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (publicKey && publicKey !== 'your_public_key_here') {
      emailjs.init(publicKey);
    }
  }, []);

  return null;
}
