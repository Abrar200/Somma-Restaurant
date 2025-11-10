import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#696958] text-white hover:bg-[#5a5849] transition-colors"
          aria-label="Close booking"
        >
          <X size={24} />
        </button>
        <iframe
          src="https://bookings.nowbookit.com/?accountid=3435bb85-00a9-4c8d-a453-8788a6508dff&venueid=13873"
          className="w-full h-full"
          title="Restaurant Booking"
        />
      </div>
    </div>
  );
}
