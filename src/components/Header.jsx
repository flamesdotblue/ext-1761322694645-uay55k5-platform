import { Home, Star, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-items-center font-semibold">
            C
          </div>
          <span className="font-semibold tracking-tight text-lg">ChairCraft</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#home" className="hover:text-slate-900 inline-flex items-center gap-2 transition-colors"><Home size={16}/> Home</a>
          <a href="#features" className="hover:text-slate-900 inline-flex items-center gap-2 transition-colors"><Star size={16}/> Features</a>
          <a href="#contact" className="hover:text-slate-900 inline-flex items-center gap-2 transition-colors"><Phone size={16}/> Contact</a>
        </nav>

        <a href="#buy" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/50">
          Buy Now
        </a>
      </div>
    </header>
  );
}
