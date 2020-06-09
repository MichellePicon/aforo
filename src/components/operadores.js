import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class operadores extends Component{

    constructor(){
        super();
        this.ref= firebase.firestore().collection('operadores');
        this.unsubscribe= null;
        this.state = {
            Operadores:[]
          };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.operador);
      }

      getOperadores = (querySnapshot) => {

        const Operadores=[];
    
            querySnapshot.forEach((doc) => {
              const { Nombre} = doc.data();
              Operadores.push({
                key: doc.id,
                Nombre
              });
            });
            this.setState({
              Operadores
            });
          }
    
      componentDidMount(){
        this.unsubscribe=this.ref.onSnapshot(this.getOperadores);
      }

    render(){
        return(
            <div>
              <header>
                <Link className="w3-button w3-hover-black" to="/MenuCoord">Volver</Link>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

                </header>
                <form class="operarios">
                <h3 >
                    <b>Lista de operarios</b>
                </h3>
                <div  onChange={Nombre => this.onChange(Nombre)}>
                    <select name="Nombre">
                    <option class="barra" value="" selected="selected">  </option>
                    {this.state.Operadores.map(Valor =>
                      <option  value={Valor.Nombre}>{Valor.Nombre}</option>)}
                  </select>
                  </div>

  

                </form>
                
                <Link class="botonOk" to="/aforoinfo">Ok</Link>


                  <footer class="footerinic">
      <img src={require('../img/INTERMEDIA.png')} width="300" alt="Logo" />
      </footer>
            </div>
        )
    }
}

export default operadores;