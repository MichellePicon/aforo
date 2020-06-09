import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuCoord extends Component{
    render(){
        return(
            <div class="Coord">
                <header>
                <Link className="w3-button w3-hover-black" to="/">Volver</Link>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

                </header>
                <div class="botones">
                <div class="Grupo1">
                <Link class="menuc" to="/RegistroOp">Registrar Operario</Link>
                <Link class="menuc" to="/resultados">Datos</Link>
                </div>
              <div class="Grupo2">
              <Link class="menuc" to="/Personalizacion">Personalización</Link>
              <Link class="menuc" to="/">Cerrar Sesión</Link>
              </div>
                </div>
                <footer class="footerinic">
                <img src={require('../img/INTERMEDIA.png')} width="300" alt="Logo" />
                </footer>
              
            </div>
        );
    }
}

export default MenuCoord;