import React from 'react';
import './App.css';
import 'w3-css'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={require('./img/semaforo.png')} width="300" alt="Logo" />
        
      </header>
      <div class="Binicio">
        <Link class="botoncoord" to="/Login">Coordinador</Link>
        <Link class="botonop" to="/operadores">Operario</Link>
      </div>

      <footer class="footerinic">
      <img src={require('./img/INTERMEDIA.png')} width="300" alt="Logo" />
      </footer>
      
      
    </div>
  );
}

export default App;
