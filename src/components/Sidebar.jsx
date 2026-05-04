import React from 'react';
import { 
  LayoutDashboard, ShoppingCart, ClipboardList, Package, 
  Tags, Box, Users, Wallet, BarChart3, History, Settings 
} from 'lucide-react';

const menus = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} />, link: '/' },
  { label: 'Kasir', icon: <ShoppingCart size={20} />, link: '/kasir' },
  { label: 'Pesanan', icon: <ClipboardList size={20} />, link: '/pesanan' },
  { label: 'Produk', icon: <Package size={20} />, link: '/produk' },
  { label: 'Kategori', icon: <Tags size={20} />, link: '/kategori' },
  { label: 'Stok', icon: <Box size={20} />, link: '/stok' },
  { label: 'Pelanggan', icon: <Users size={20} />, link: '/pelanggan' },
  { label: 'Pengeluaran', icon: <Wallet size={20} />, link: '/pengeluaran' },
  { label: 'Laporan', icon: <BarChart3 size={20} />, link: '/laporan' },
  { label: 'Riwayat', icon: <History size={20} />, link: '/riwayat' },
  { label: 'Pengaturan', icon: <Settings size={20} />, link: '/pengaturan' },
];

const Sidebar = () => (
  <nav className="w-64 bg-white border-r border-slate-200 h-full flex flex-col shadow-sm shrink-0">
    <div className="p-6 border-b border-teal-500 bg-teal-600 text-white">
      <h1 className="text-xl font-black tracking-tighter">Ngumbahin.</h1>
    </div>
    <div className="flex-1 overflow-y-auto p-4 space-y-1">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-3">Menu Utama</p>
      {menus.map((item) => (
        <a key={item.label} href={item.link} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all font-semibold group">
          <span className="text-slate-400 group-hover:text-teal-500">{item.icon}</span>
          <span className="text-sm">{item.label}</span>
        </a>
      ))}
    </div>
  </nav>
);

export default Sidebar;