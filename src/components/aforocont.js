import React, { Component } from 'react';
import firebase from '../firebase';
import 'react-datepicker/dist/react-datepicker.css';
import 'pretty-ms';

const ms = require('pretty-ms')

class aforocont extends Component {
    constructor(props){
        super(props);
        this.ref= firebase.firestore().collection('aforocont');
    this.state = {
      contcard: 0,
      conttaxd: 0,
      contmotd: 0,

      contcari: 0,
      conttaxi: 0,
      contmoti: 0,

      contcaru: 0,
      conttaxu: 0,
      contmotu: 0,

      contcars: 0,
      conttaxs: 0,
      contmots: 0,

      contc: 0,
      contm: 0,
      contt: 0,
      cont: 0,


      time: 0,
      isOn: false,
      start: 0
    };

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)

    this.conteoc = this.conteoc.bind(this);
    this.borrarc = this.borrarc.bind(this);

    this.conteom = this.conteom.bind(this);
    this.borrarm = this.borrarm.bind(this);

    this.conteot = this.conteot.bind(this);
    this.borrart = this.borrart.bind(this);

    this.conteo = this.conteo.bind(this);
    this.borrar = this.borrar.bind(this);

    this.conteocard = this.conteocard.bind(this);
    this.borrarcard = this.borrarcard.bind(this);
    this.conteotaxd = this.conteotaxd.bind(this);
    this.borrartaxd = this.borrartaxd.bind(this);
    this.conteomotd = this.conteomotd.bind(this);
    this.borrarmotd = this.borrarmotd.bind(this);

    this.conteocari = this.conteocari.bind(this);
    this.borrarcari = this.borrarcari.bind(this);
    this.conteotaxi = this.conteotaxi.bind(this);
    this.borrartaxi = this.borrartaxi.bind(this);
    this.conteomoti = this.conteomoti.bind(this);
    this.borrarmoti = this.borrarmoti.bind(this);

    this.conteocaru = this.conteocaru.bind(this);
    this.borrarcaru = this.borrarcaru.bind(this);
    this.conteotaxu = this.conteotaxu.bind(this);
    this.borrartaxu = this.borrartaxu.bind(this);
    this.conteomotu = this.conteomotu.bind(this);
    this.borrarmotu = this.borrarmotu.bind(this);

    this.conteocars = this.conteocars.bind(this);
    this.borrarcars = this.borrarcars.bind(this);
    this.conteotaxs = this.conteotaxs.bind(this);
    this.borrartaxs = this.borrartaxs.bind(this);
    this.conteomots = this.conteomots.bind(this);
    this.borrarmots = this.borrarmots.bind(this);
    }

    startTimer() {
      this.setState({
        isOn: true,
        time: this.state.time,
        start: Date.now() - this.state.time
      })

      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
      }), 1);
    }

    stopTimer() {
      this.setState({isOn: false})
      clearInterval(this.timer)
    }

    resetTimer() {
      this.setState({time: 0, isOn: false})
    }

    onSubmit = (e) => {
      e.preventDefault();
  
      const { 
        contc, 
        contm, 
        contt, 
        cont,
        contcard,
        conttaxd,
        contmotd,
  
        contcari,
        conttaxi,
        contmoti,
  
        contcaru,
        conttaxu,
        contmotu,
  
        contcars,
        conttaxs,
        contmots } = this.state;
  
      this.ref.add({
        contc,
        contm,
        contt,
        cont,
        contcard,
        conttaxd,
        contmotd,
  
        contcari,
        conttaxi,
        contmoti,
  
        contcaru,
        conttaxu,
        contmotu,
  
        contcars,
        conttaxs,
        contmots
      }).then((docRef) => {
        this.setState({
        cont: 0,

        contc: 0,
        contt: 0,
        contm: 0,
        contcard: 0,
        conttaxd: 0,
        contmotd: 0,

        contcari: 0,
        conttaxi: 0,
        contmoti: 0,

        contcaru: 0,
        conttaxu: 0,
        contmotu: 0,

        contcars: 0,
        conttaxs: 0,
        contmots: 0
        });
        this.props.history.push("/gracias")
      })
      .catch((error) => {
        console.error("Error", error);
      });
    }
    

    //VEHICULOS DERECHA
  conteocard (event){
      this.setState({contcard: this.state.contcard + 1});
      this.conteoc();
  }

  borrarcard (event){
    if (this.state.contcard>0){
      this.setState({contcard: this.state.contcard - 1});
      this.borrarc();
    }
  }

  conteotaxd (event){
      this.setState({conttaxd: this.state.conttaxd + 1});
      this.conteot();
  }

  borrartaxd (event){
    if (this.state.conttaxd>0){
      this.setState({conttaxd: this.state.conttaxd - 1});
      this.borrart();
    }
  }

  conteomotd (event){
      this.setState({contmotd: this.state.contmotd + 1});
      this.conteom();
  }

  borrarmotd (event){
    if (this.state.contmotd>0){
      this.setState({contmotd: this.state.contmotd - 1});
      this.borrarm();
    }
  }

    //VEHICULOS IZQUIERDA
    conteocari (event){
      this.setState({contcari: this.state.contcari + 1});
      this.conteoc();
    
  }

  borrarcari (event){
    if (this.state.contcari>0){
      this.setState({contcari: this.state.contcari - 1});
      this.borrarc();
      this.borrarc();
    }
  }

  conteotaxi (event){
      this.setState({conttaxi: this.state.conttaxi + 1});
      this.conteot();
  }

  borrartaxi (event){
    if (this.state.conttaxi>0){
      this.setState({conttaxi: this.state.conttaxi - 1});
      this.borrart();
    }
  }

  conteomoti (event){
      this.setState({contmoti: this.state.contmoti + 1});
      this.conteom();
  }

  borrarmoti (event){
    if (this.state.contmoti>0){
      this.setState({contmoti: this.state.contmoti - 1});
      this.borrarm();
    }
  }

    //VEHICULOS GIRO U
    conteocaru (event){
      this.setState({contcaru: this.state.contcaru + 1});
      this.conteoc();
    
  }

  borrarcaru (event){
    if (this.state.contcaru>0){
      this.setState({contcaru: this.state.contcaru - 1});
      this.borrarc();
    }
  }

  conteotaxu (event){
      this.setState({conttaxu: this.state.conttaxu + 1});
      this.conteot();
  }

  borrartaxu (event){
    if (this.state.conttaxu>0){
      this.setState({conttaxu: this.state.conttaxu - 1});
      this.borrart();
    }
  }

  conteomotu (event){
      this.setState({contmotu: this.state.contmotu + 1});
      this.conteom();
  }

  borrarmotu (event){
    if (this.state.contmotu>0){
      this.setState({contmotu: this.state.contmotu - 1});
      this.borrarm();
    }
  }

      //VEHICULOS SIN GIRO
      conteocars (event){
        this.setState({contcars: this.state.contcars + 1});
        this.conteoc();
      
    }
  
    borrarcars (event){
      if (this.state.contcars>0){
        this.setState({contcars: this.state.contcars - 1});
        this.borrarc();
      }
    }
  
    conteotaxs (event){
        this.setState({conttaxs: this.state.conttaxs + 1});
        this.conteot();
    }
  
    borrartaxs (event){
      if (this.state.conttaxs>0){
        this.setState({conttaxs: this.state.conttaxs - 1});
        this.borrart();
      }
    }
  
    conteomots (event){
        this.setState({contmots: this.state.contmots + 1});
        this.conteom();
    }
  
    borrarmots (event){
      if (this.state.contmots > 0){
        this.setState({contmots: this.state.contmots - 1});
        this.borrarm();
      }
    }

      //GENERAL CARROS
      conteoc (event){
        this.setState({
          contc: this.state.contcard + this.state.contcari + this.state.contcaru + this.state.contcars + 1
        });
        this.conteo();
      }
    
      borrarc (event){
          this.setState({contc: this.state.contc - 1});
          this.borrar();
      }
  
      //GENERAL MOTOS
      conteom (event){
        this.setState({
          contm: this.state.contmotd + this.state.contmoti + this.state.contmotu + this.state.contmots + 1
        });
        this.conteo();
      }
    
      borrarm (event){
          this.setState({contm: this.state.contm - 1});
          this.borrar();
      }

      //GENERAL TAXIS
      conteot (event){
        this.setState({
          contt: this.state.conttaxd + this.state.conttaxi + this.state.conttaxu + this.state.conttaxs + 1
        });
        this.conteo();
      }
    
      borrart (event){
          this.setState({contt: this.state.contt - 1});
          this.borrar();
      }

      //GENERAL
      conteo (event){
        this.setState({
          cont: this.state.contc + this.state.contm + this.state.contt + 1
        });
      }

      borrar (event){
          this.setState({cont: this.state.cont - 1});
      }

  render() {
    
    let start = (this.state.time == 0) ?
          <button class="botonOk" type = "button" onClick={this.startTimer}>Iniciar</button> :
          null
        let stop = (this.state.time == 0 || !this.state.isOn) ?
          null :
          <button class="btn btn-primary" type = "button" onClick={this.stopTimer}>stop</button>
        let resume = (this.state.time == 0 || this.state.isOn) ?
          null :
          <button class="btn btn-primary" type = "button" onClick={this.startTimer}>resume</button>
        let reset = (this.state.time == 0 || this.state.isOn) ?
          null :
          <button class="btn btn-primary" type = "button" onClick={this.resetTimer}>reset</button>
    
    return (
        <div>
          <header>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

                </header>         
             

            <div class="panel-time">
      <h1>Tiempo: {ms(this.state.time)}</h1>
      {start}
      {/* {resume}
      {stop}
      {reset} */}
    </div>
            <div>
                <form class="ConteoForm" onSubmit={this.onSubmit}>
                
                    <div class="form-group">
                    <h3 class="panel-title1">
                    Giro Derecha
                   </h3>
                        <div class="vehiculo-group">
                        <button class="btn btn-primary" type = "button" onClick = {this.conteocard}> AUTOMOVIL </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.conteotaxd}> MOTOCICLETA </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.conteomotd}> BUS </button>
                        </div>
                        <div>
                        
                        <div class="borra-group">
                        <button class="btn btn-primary" type = "button" onClick = {this.borrarcard}> BORRAR AUTOMOVIL </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.borrartaxd}> BORRAR MOTOCICLETA </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.borrarmotd}> BORRAR BUS </button>
                        </div>
                        
                        <div class="conteos"> <p>Automóviles: {this.state.contcard} / Motocicletas: {this.state.conttaxd} / Buses: {this.state.contmotd}</p></div>


                        <h3 class="panel-title1">Giro Izquierda</h3>
                        <div class="vehiculo-group">
                        <button class="btn btn-primary" type = "button" onClick = {this.conteocari}> AUTOMOVIL </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.conteotaxi}> MOTOCICLETA </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.conteomoti}> BUS </button>
                        </div>
                        </div>

                        <div class="borra-group">
                        <button class="btn btn-primary" type = "button" onClick = {this.borrarcari}> BORRAR AUTOMOVIL </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.borrartaxi}> BORRAR MOTOCICLETA </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.borrarmoti}> BORRAR BUS </button>
                        </div>

                        <div class="conteos"> <p>Automóviles: {this.state.contcari} / Motocicletas: {this.state.conttaxi} / Buses: {this.state.contmoti}</p></div>


                        <div>
                        <h3 class="panel-title1">Giro en U</h3>
                        <div class="vehiculo-group">
                        <button class="btn btn-primary" type = "button" onClick = {this.conteocaru}> AUTOMOVIL </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.conteotaxu}> MOTOCICLETA </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.conteomotu}> BUS </button>
                        </div>
                        </div>

                        <div class="borra-group">
                        <button class="btn btn-primary" type = "button" onClick = {this.borrarcaru}> BORRAR AUTOMOVIL </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.borrartaxu}> BORRAR MOTOCICLETA </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.borrarmotu}> BORRAR BUS </button>
                        </div>
                        <div class="conteos"> <p>Automóviles: {this.state.contcaru} / Motocicletas: {this.state.conttaxu} / Buses: {this.state.contmotu}</p></div>


                        <div>
                        <h3 class="panel-title1">Sin giro</h3>
                        <div class="vehiculo-group">
                        <button class="btn btn-primary" type = "button" onClick = {this.conteocars}> AUTOMOVIL </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.conteotaxs}> MOTOCICLETA </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.conteomots}> BUS </button>
                        </div>
                        </div>

                        <div class="borra-group">
                        <button class="btn btn-primary" type = "button" onClick = {this.borrarcars}> BORRAR AUTOMOVIL </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.borrartaxs}> BORRAR MOTOCICLETA </button>
                        <button class="btn btn-primary" type = "button" onClick = {this.borrarmots}> BORRAR BUS </button>
                        </div>
                        <div class="conteos"> <p>Automóviles: {this.state.contcars} / Motocicletas: {this.state.conttaxs} / Buses: {this.state.contmots}</p></div>

                        <h3><b>
                            Conteo general Automóviles: {this.state.contc}
                            </b>
                        </h3>

                        <h3><b>
                            Conteo general Motocicletas: {this.state.contt}
                            </b>
                        </h3>

                        <h3><b>
                            Conteo general Buses: {this.state.contm}
                            </b>
                        </h3>

                        <h1 class="panel-title">
                            Conteo general: {this.state.cont}
                        </h1>
                    </div>
                    <div>
                    <button type="submit" class="botonIngresar">Terminar</button>
                    </div>
                </form>
            </div>
        </div>
      );
  }
}

export default aforocont;