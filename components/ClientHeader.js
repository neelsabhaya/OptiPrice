"use client";

import { useTheme } from "@/app/providers";
import AuthButton from "./AuthButton";
import ThemeToggle from "./ThemeToggle";

export default function ClientHeader({ user }) {
  const { theme } = useTheme();

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-black bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent hover:from-orange-500 hover:to-orange-300 transition-all duration-300 cursor-pointer">
            OptiPrice
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <AuthButton user={user} />
        </div>
      </div>
    </header>
  );
}
