import React from 'react';
import Sidebar from '../components/Sidebar';
import BottomNav from '../components/BottomNav';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden text-slate-800 font-sans">
      {/* Sidebar: Hanya muncul di Desktop (Layar besar / lg) */}
      <aside className="hidden lg:flex shrink-0">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* Area Konten Utama: Bisa di-scroll */}
        <main className="flex-1 overflow-y-auto pb-24 lg:pb-8">
          {children}
        </main>

        {/* Bottom Navigation: Hanya muncul di Mobile (lg:hidden) */}
        <div className="lg:hidden">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default Layout;