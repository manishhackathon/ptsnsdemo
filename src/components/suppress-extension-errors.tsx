'use client';

import { useEffect } from 'react';

// This component suppresses specific browser extension errors in development,
// like the "Failed to connect to MetaMask" error, to prevent them from
// triggering Next.js's development error overlay.
export function SuppressExtensionErrors() {
  useEffect(() => {
    const SUPPRESSED_ERRORS = [
      'Failed to connect to MetaMask',
    ];

    const handleError = (event: ErrorEvent) => {
      if (SUPPRESSED_ERRORS.some((msg) => event.message.includes(msg))) {
        event.preventDefault();
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (event.reason && typeof event.reason.message === 'string') {
        if (SUPPRESSED_ERRORS.some((msg) => event.reason.message.includes(msg))) {
          event.preventDefault();
        }
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return null;
}
