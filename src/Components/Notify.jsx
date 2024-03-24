import React from 'react';
import { toast } from 'sonner';

function Notify() {
  return null; // Notify component doesn't render anything in the DOM
}

export function notify(message) {
  toast.success(message, {
    autoClose: 1000,
    pauseOnHover: true,
    closeOnClick: true,
    // Add other toast configuration options here
  });
}

export default Notify;
