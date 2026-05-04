import React from 'react';
import { Home, ShoppingCart, ClipboardList } from 'lucide-react';

const BottomNav = () => (
  <nav className="flex lg:hidden justify-around items-center bg-white border-t border-slate-200 p-3 pb-safe shrink-0 shadow-lg">
    <a href="/" className="flex flex-col items-center text-teal-600">
      <Home size={24} />
      <span className="text-[10px] font-bold mt-1">Home</span>
    </a>
    <a href="/kasir" className="flex flex-col items-center text-slate-400">
      <ShoppingCart size={24} />
      <span className="text-[10px] font-bold mt-1">Kasir</span>
    </a>
    <a href="/pesanan" className="flex flex-col items-center text-slate-400">
      <ClipboardList size={24} />
      <span className="text-[10px] font-bold mt-1">Pesanan</span>
    </a>
  </nav>
);

export default BottomNav;