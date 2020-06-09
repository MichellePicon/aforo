import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';


class aforoinfo extends Component {
    constructor(){
        super();
        this.ref= firebase.firestore().collection('aforoinfo');
        this.state = {
            clima: '',
            fecha: new Date(),
            obs:''
          };
    }
        
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      handleChange = date => {
        this.setState({
          fecha: date
        });
      };

      onSubmit = (e) => {
        e.preventDefault();
    
        const { clima, fecha, obs } = this.state;
    
        this.ref.add({
          clima,
          fecha,
          obs
        }).then((docRef) => {
          this.setState({
            clima: '',
            fecha: new Date(),
            obs:''
          });
          this.props.history.push("/aforocont")
        })
        .catch((error) => {
          console.error("Error", error);
        });
      }
    
  
  render() {
    const { clima, fecha, obs } = this.state;
    return (
        <div>
         <header>
                <Link className="w3-button w3-hover-black" to="/MenuCoord">Volver</Link>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

                </header>
            
            <div >
                <form class="login" onSubmit={this.onSubmit}>
                <div class="panel-heading">
                <h3 >
                   <b>DATOS DE LA ZONA</b> 
                </h3>
            </div>
                    
                    <div class="form-group" onChange={clima => this.onChange(clima)}>
                        <h4 >
                            <b>CLIMA</b>
                        </h4>
                        <div class="RadioGroup">
                          <input type="radio" id="clima" name="clima" value="Lluvia"></input>
                        <label>Lluvia</label>
                        <br></br>
                         <input type="radio" id="clima" name="clima" value="Nublado"></input>
                        <label>Nublado</label>
                        <br></br>
                        <input type="radio" id="clima" name="clima" value="Soleado"></input>
                        <label>Soleado</label>
                        <br></br>
                        <input type="radio" id="clima" name="clima" value="Granizo"></input>
                        <label>Granizo</label>
                        <br></br>
                        <input type="radio" id="clima" name="clima" value="Tormenta"></input>
                        <label>Tormenta</label>
                        
                        </div>
                        
                    </div>
                    <div class="form-group">
                        <h4 >
                            <b>FECHA Y HORA</b>
                        </h4>
                            <DatePicker
                                selected={this.state.fecha}
                                onChange={this.handleChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="Pp"
                            />
                    </div>
                    <div class="container2">
                    <label for="obs"><b>COMENTARIOS</b></label>
                  <input 
                    type="text" 
                    name="obs" value={obs} 
                    class="form-control"
                    onChange={(e) => {
                      this.setState({obs: e.target.value});
                      }} 
                      placeholder="¿Algo adicional?" 
                  />
                    </div>
                    
                    
                    <button type="submit" class="botonIngresar" align="right">Ingresar</button>
                </form>
                
            </div>

            <footer class="footerinic">
      <img src={require('../img/INTERMEDIA.png')} width="300" alt="Logo" />
      </footer>
        </div>
        
      );
  }
}

export default aforoinfo;
