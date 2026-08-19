"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: ToastProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-white text-gray-900 border border-gray-200 px-4 py-3 rounded-xl shadow-lg font-sans animate-in fade-in slide-in-from-bottom-2 duration-200">
      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
      <span className="text-xs font-medium">{message}</span>
    </div>
  );
}
