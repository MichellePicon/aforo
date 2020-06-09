import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class resultados extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('aforocont');
        this.state = {
            datatotal:[],
            conteo:'',
            conteocar:'',
            conteomotos:'',
            conteotaxi:'',

            conteocarDer:'',
            conteomotosDer:'',
            conteotaxiDer:'',

            conteocarIz:'',
            conteomotosIz:'',
            conteotaxiIz:'',

            conteocarU:'',
            conteomotosU:'',
            conteotaxiU:'',

            conteocars:'',
            conteomotoss:'',
            conteotaxis:''
        };
    }

    getConteo = (querySnapshot) => {

        const conteo=[];
        const conteocar=[];
        const conteomotos=[];
        const conteotaxi=[];

        const conteocarDer=[];
        const conteomotosDer=[];
        const conteotaxiDer=[];

        const conteocarIz=[];
        const conteomotosIz=[];
        const conteotaxiIz=[];

        const conteocarU=[];
        const conteomotosU=[];
        const conteotaxiU=[];

        const conteocars=[];
        const conteomotoss=[];
        const conteotaxis=[];

        const datatotal=[];
    
            querySnapshot.forEach((doc) => {
              const { 
                cont,
                contc,
                contm,
                contt,
                contcard,
                contmotd,
                conttaxd,
                contcari,
                contmoti,
                conttaxi,
                contcaru,
                contmotu,
                conttaxu,
                contcars,
                contmots,
                conttaxs
                } = doc.data();
              conteo.push(
                cont
              )
              conteocar.push(
                contc
              )
              conteomotos.push(
                contm
              )
              conteotaxi.push(
                contt
              )
              conteocarDer.push(
                contcard
              )
              conteomotosDer.push(
                contmotd
              )
              conteotaxiDer.push(
                conttaxd
              )
              conteocarIz.push(
                contcari
              )
              conteomotosIz.push(
                contmoti
              )
              conteotaxiIz.push(
                conttaxi
              )
              conteocarU.push(
                contcaru
              )
              conteomotosU.push(
                contmotu
              )
              conteotaxiU.push(
                conttaxu
              )
              conteocars.push(
                contcars
              )
              conteomotoss.push(
                contmots
              )
              conteotaxis.push(
                conttaxs
              )
              datatotal.push({
                cont,
                contc,
                contm,
                contt,
                contcard,
                contmotd,
                conttaxd,
                contcari,
                contmoti,
                conttaxi,
                contcaru,
                contmotu,
                conttaxu,
                contcars,
                contmots,
                conttaxs
              });
            });
            this.setState({
              datatotal,
              conteo,
              conteocar,
              conteomotos,
              conteotaxi,
              conteocarDer,
              conteomotosDer,
              conteotaxiDer,
              conteocarIz,
              conteomotosIz,
              conteotaxiIz,
              conteocarU,
              conteomotosU,
              conteotaxiU,
              conteocars,
              conteomotoss,
              conteotaxis
            });
          }
    
      componentDidMount(){
        this.unsubscribe=this.ref.onSnapshot(this.getConteo);
      }

    render() {
        console.log(this.state.datatotal);
      return (
          <div>
            <header>
                <Link className="w3-button w3-hover-black" to="/MenuCoord">Volver</Link>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

                </header>

                <div class="resultados">
                <h2>
              Número de conteos: {this.state.datatotal.length}
            </h2>
            <Link class="btn btn-primary" to="/analisis">Gráficas</Link>
            <h3><b>Resultados:</b></h3>
            <h5>
            {this.state.datatotal.map(Valor =>
              <h5>Total de Vehículos:  {Valor.cont} <br></br>
              Total de Automóviles:  {Valor.contc}
              <br></br>
              Total de Motocicletas:  {Valor.contm}
              <br></br>
              Total de Buses:  {Valor.contt}</h5>
                      )}
            </h5>

            <h3><b>Por movimiento</b></h3>
            <h5><b>Giros a la derecha:</b></h5>
            <h5>
            {this.state.datatotal.map(Valor =>
              <h5>
              Automóviles:  {Valor.contcard}
              <br></br>
              Motocicletas:  {Valor.contmotd}
              <br></br>
              Buses:  {Valor.conttaxd}</h5>
                      )}
            </h5>

            <h5><b>Giros a la izquierda:</b></h5>
            <h5>
            {this.state.datatotal.map(Valor =>
              <h5>
              Automóviles:  {Valor.contcari}
              <br></br>
              Motocicletas:  {Valor.contmoti}
              <br></br>
              Buses:  {Valor.conttaxi}</h5>
                      )}
            </h5>

            <h5><b>Giros en U:</b></h5>
            <h5>
            {this.state.datatotal.map(Valor =>
              <h5>
              Automóviles:  {Valor.contcaru}
              <br></br>
              Motocicletas:  {Valor.contmotu}
              <br></br>
              Buses:  {Valor.conttaxu}</h5>
                      )}
            </h5>
            
            <h5><b>Sin giros</b></h5>
            <h5>
            {this.state.datatotal.map(Valor =>
              <h5>
              Automóviles:  {Valor.contcars}
              <br></br>
              Motocicletas:  {Valor.contmots}
              <br></br>
              Buses:  {Valor.conttaxs}</h5>
                      )}
            </h5>
                </div>
          

            </div>
      );
    }

  }

export default resultados;