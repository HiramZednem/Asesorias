import React from 'react';
import Sidebar from '../componentes/moleculas/Sidebar';
import MainContent from '../componentes/moleculas/MainContent';
import '../assets/App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
