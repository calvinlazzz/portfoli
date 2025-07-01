import React from 'react';
import Navbar from './components/Navbar';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>This is a simple portfolio application built with React.</p>
      </main>
    </div>
  );
}

export default App;