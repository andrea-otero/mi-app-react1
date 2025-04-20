import React from 'react';
import './App.css';
import MensajeBienvenida from './components/MensajeBienvenida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola, React!</h1>
        <p>Bienvenido a tu primer proyecto React.</p>
        <MensajeBienvenida />
      </header>
    </div>
  );
}

export default App;