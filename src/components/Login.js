import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{
  render(){
    return(
      <div>
        <header >
                <Link className="w3-button w3-hover-black" to="/">Volver</Link>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

        </header>
        <form class="login">

        <div class="container">
        <label for="uname"><h3>REGISTRO</h3></label>
          <div>
          
          <input  type="text" placeholder="Usuario" name="uname" required/>

          </div>
          <div>
          
          <input  type="password" placeholder="Contraseña" name="psw" required/>

          </div>
          
          <Link class="botonIngresar" to="/MenuCoord">Ingresar</Link>

        </div>

      </form>

      <footer class="footerinic">
      <img src={require('../img/INTERMEDIA.png')} width="300" alt="Logo" />
      </footer>
      </div>
    );
  }
}

export default Login;