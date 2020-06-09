import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class RegistroOp extends Component{

    constructor() {
        super();
        this.ref = firebase.firestore().collection('operadores');
        this.state = {
          Nombre:''
        };
      }
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

      onSubmit = (e) => {
        e.preventDefault();
    
        const Nombre = this.state;
    
        this.ref.add(Nombre).then((docRef) => {
          this.setState({
            Nombre:''
          });
          this.props.history.push("/MenuCoord")
        })
        .catch((error) => {
          console.error("Error", error);
        });
      }

    render(){
        return(
            <div>
                 <header>
                <Link className="w3-button w3-hover-black" to="/">Volver</Link>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

                </header>
                <form class="login" onSubmit={this.onSubmit}>
                    <div class="container">
                    <label for="Nombre"><b>Nombre de Operario</b></label>
                <div>
                
                <input 
                    type="text" 
                    placeholder="Nombre de Operario" 
                    name="Nombre" 
                    onChange={(e) => {
                        this.setState({Nombre: e.target.value});
                        }} 
                    required/>

                </div>
                <button type="submit" class="botonIngresar" align="right">Registrar</button>                
                    </div>
                
                </form>

                <footer class="footerinic">
      <img src={require('../img/INTERMEDIA.png')} width="300" alt="Logo" />
      </footer>
            </div>
        );
    }
}

export default RegistroOp;