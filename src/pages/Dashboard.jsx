import React from 'react';
import { AlertTriangle, Timer, CheckCircle, Package } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <p className="text-teal-600 text-xs font-black uppercase tracking-widest mb-1 italic">Operasional Hari Ini[cite: 2]</p>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight leading-none">Dashboard.</h1>
        </div>
        <div className="h-12 w-12 bg-rose-100 rounded-2xl flex items-center justify-center border-2 border-rose-200 text-rose-600 font-bold shadow-sm shrink-0">OW</div>
      </header>

      {/* Alert Supplies[cite: 2] */}
      <section className="bg-rose-50 border-2 border-rose-100 p-5 rounded-[2rem] flex items-center gap-5 shadow-sm">
        <div className="bg-white p-3 rounded-2xl text-rose-500 shadow-sm shrink-0">
          <AlertTriangle size={28} />
        </div>
        <div>
          <h4 className="font-bold text-sm text-rose-800 tracking-tight">Supplies Menipis![cite: 2]</h4>
          <p className="text-xs text-rose-600 mt-1 leading-relaxed italic">Deterjen Cair sisa 500 ml. Segera restock agar sistem auto-deduct aman[cite: 1, 2].</p>
        </div>
      </section>

      {/* Stats Cards[cite: 2] */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-teal-600 p-6 rounded-[2.5rem] text-white shadow-xl shadow-teal-100 col-span-2 lg:col-span-1">
          <p className="text-[10px] font-bold uppercase opacity-80 mb-1">Active Orders[cite: 2]</p>
          <div className="flex items-end justify-between">
            <p className="text-4xl font-black tracking-tighter leading-none">08</p>
            <Package size={32} className="opacity-30" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Process[cite: 2]</p>
          <div className="flex justify-between items-center mt-3">
            <p className="text-2xl font-black text-orange-400 tracking-tight">05</p>
            <Timer size={20} className="text-orange-200" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ready[cite: 2]</p>
          <div className="flex justify-between items-center mt-3">
            <p className="text-2xl font-black text-emerald-500 tracking-tight">03</p>
            <CheckCircle size={20} className="text-emerald-200" />
          </div>
        </div>

        <div className="hidden lg:flex bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex-col justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left leading-tight">Picked Up Today[cite: 2]</p>
          <p className="text-2xl font-black text-slate-800 mt-2 tracking-tight">12</p>
        </div>
      </section>

      {/* Menu Grid: Hanya muncul di Mobile[cite: 2] */}
      <section className="lg:hidden pt-4">
        <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 px-1 italic">- Menu Utama[cite: 2] -</h3>
        <div className="grid grid-cols-4 gap-y-8 gap-x-2 text-center">
           {/* Kita akan memetakan 10 menu Kasgo di sini untuk tampilan mobile */}
           <a href="/kasir" className="flex flex-col items-center group active:scale-90 transition-transform">
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-teal-600 shadow-sm border border-slate-100 mb-2">
              <ShoppingCart size={24} />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Kasir</span>
          </a>
          {/* Tambahkan item menu lainnya mengikuti pola di atas */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;