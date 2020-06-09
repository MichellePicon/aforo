import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

class gracias extends Component{
    render(){
        return(
            <div >
                <header>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

                </header>
                <form class="login">
                <h2>
                    ¡Tu conteo ha finalizado con éxito!
                </h2>
                <Link className="botonOk" to="/">Salir</Link>
                </form>
                <footer class="footerinic">
      <img src={require('../img/INTERMEDIA.png')} width="300" alt="Logo" />
      </footer>
            </div>
        )
    }
}

export default gracias;