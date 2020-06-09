import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Personalizacion extends Component{
    render(){
        return(
            <div>
                <header>
                <Link className="w3-button w3-hover-black" to="/">Volver</Link>
                <img class="LogoApp" src={require('../img/semaforo.png')} width="300" alt="Logo" />

                </header>
                
                <form class="Personalizar">
                <h1>PERSONALIZACIÓN</h1>
                    <div>
                        <div >
                        <label><b>Vehículos de Carga</b></label>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Liviano de Carga</label>
                            </div>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Camión de Carga C2-C3</label>
                            </div>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Camión de carga pesada</label>
                            </div>
                        
                        <label><b>Vehículos de Pasajeros</b></label>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Camioneta</label>
                            </div>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Automóviles</label>
                            </div>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Microbus</label>
                            </div>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Motocicletas</label>
                            </div>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Bus</label>
                            </div>

                        <label><b>Equipo Pesado</b></label>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Vehículos de Construcción</label>
                            </div>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>vehículos Agrícolas</label>
                            </div>

                        <label><b>Otros</b></label>
                            <div>
                                <input class="form-check-input" type="radio"></input>
                                <label>Remolques y/o trailers</label>
                            </div>
                        </div>
                        
                            <div class="textos">
                                <div>
                                <label><b>Nombre de la vía</b></label>
                                </div>
                            
                                <input type="text" />
                                <div>
                                <label><h4><b>Periodo</b></h4></label>
                                </div>
                            
                                <div>
                                <div>
                                <label><b>Tiempo</b></label>
                                </div>
                            
                                <input type="text" />
                                <div>
                                <label><b>Descanso</b></label>
                                </div>
                                <input type="text" />
                            </div>
                        
                        </div>

                        <Link class="botonIngresar" to="/MenuCoord">Guardar</Link>

                    </div>

                </form>

            </div>
        );
    }
}

export default Personalizacion;