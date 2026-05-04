import React from 'react';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Layout>
      {/* Nantinya di sini kita bisa menggunakan React Router untuk pindah halaman[cite: 1] */}
      <Dashboard />
    </Layout>
  );
}

export default App;