import React, { Component } from 'react';
import firebase from './firebase';
import { Link } from 'react-router-dom';
import '../node_modules/react-vis/dist/style.css'
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, LineSeries, AreaSeries, LineMarkSeries} from 'react-vis';

class analisis extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('aforocont');
        this.state = {
            data1:[],
            datacarro:[],
            datataxi:[],
            datamoto:[],
            conteo:'',
            conteocar:'',
            conteomotos:'',
            conteotaxi:'',
        };
    }

    getConteo = (querySnapshot) => {

        const conteo=[];
        const conteocar=[];
        const conteomotos=[];
        const conteotaxi=[];
    
            querySnapshot.forEach((doc) => {
              const { 
                cont,
                contc,
                contm,
                contt} = doc.data();
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
             
            });
            this.setState({
              conteo,
              conteocar,
              conteomotos,
              conteotaxi
            });
          }
    
      componentDidMount(){
        this.unsubscribe=this.ref.onSnapshot(this.getConteo);
      }

    render() {

        for(var a=0;a<this.state.conteo.length;a++){
          var y=this.state.conteo[a];
          var x=String('Conteo '+(a+1));
          this.state.data1.push({
            x,
            y
          })
        }

        for(var a=0;a<this.state.conteocar.length;a++){
          var y=this.state.conteocar[a];
          var x=String('Conteo '+(a+1));
          this.state.datacarro.push({
            x,
            y
          })
        }

        for(var a=0;a<this.state.conteomotos.length;a++){
          var y=this.state.conteomotos[a];
          var x=String('Conteo '+(a+1));
          this.state.datamoto.push({
            x,
            y
          })
        }

        for(var a=0;a<this.state.conteotaxi.length;a++){
          var y=this.state.conteotaxi[a];
          var x=String('Conteo '+(a+1));
          this.state.datataxi.push({
            x,
            y
          })
        }
      return (
        <div className="pagina">
          <header >
                <Link className="w3-button w3-hover-black" to="/resultados">Volver</Link>
                <img class="LogoApp" src={require('./img/semaforo.png')} width="300" alt="Logo" />

        </header>

                <div class="graficas">
                <div>
        <h3>
              Número de Vehículos por tipo para cada Conteo
            </h3>
            <h5>
              (Diagrama de Barras)
            </h5>
          </div>
          <div class="graf">
          <XYPlot
          height={500} 
          width= {window.innerWidth*0.5} 
          xType="ordinal">
            <XAxis title=""/>
            <YAxis title="# Vehiculos"/>
            <VerticalGridLines />
            <HorizontalGridLines />
            <VerticalBarSeries 
                color="#57D0CF"
                data={this.state.datacarro} />
            <VerticalBarSeries 
                color="#3DCA5B"
                data={this.state.datamoto} />
            <VerticalBarSeries 
                color="#F1E462"
                data={this.state.datataxi} />
        </XYPlot>
          </div>
          
        <h5>
              (Gráfica Lineal)
            </h5>
            <div class="graf">
            <XYPlot  width={window.innerWidth*0.5} height={window.innerHeight*0.5} xType="ordinal">
         <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis  />
          <YAxis  />
          <LineSeries
           className="linemark-series-example-2"
           color="#57D0CF"
            //curve={'curveMonotoneX'}
           data={this.state.datacarro}
          />
          <LineSeries
           className="linemark-series-example-2"
           color="#3DCA5B"
            //curve={'curveMonotoneX'}
           data={this.state.datamoto}
          />
          <LineSeries
           className="linemark-series-example-2"
           color="#F1E462"
            //curve={'curveMonotoneX'}
           data={this.state.datataxi}
          />
       </XYPlot>
            </div>
        
        <div>
            <h3>
              Número Total de Vehículos en cada conteo
            </h3>
          </div>
          <div class="graf">
          <XYPlot 
        height={500} 
        width= {window.innerWidth*0.5} 
        stackBy='y' 
        xType="ordinal">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis title="# de vehiculos"/>
            <LineMarkSeries 
                color="#ff0080"
                data={this.state.data1} />
        </XYPlot>
          </div>
        
                  {/* //Para cada tipo de Vehículo */}
                  <div>
            <h3>
              Total de Carros en cada Conteo
            </h3>
            <h5>
              (Diagrama de Área)
            </h5>
          </div>
          <div class="graf">
          <XYPlot width={window.innerWidth*0.5} height={500} xType="ordinal">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis/>
          <YAxis  title="# de carros"/>
          <AreaSeries
            className="area-series-example"
            curve={'curveMonotoneX'}
            data={this.state.datacarro}
          />
        </XYPlot>
          </div>
        

        <div>
            <h3>
              Total de Motos en cada conteo
            </h3>
            <h5>
              (Diagrama de Área)
            </h5>
          </div>
          <div class="graf">
          <XYPlot width={window.innerWidth*0.5} height={500} xType="ordinal">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis  />
          <YAxis title="# de motos" />
          <AreaSeries
            className="area-series-example"
            curve={'curveMonotoneX'}
            data={this.state.datamoto}
          />
        </XYPlot>
          </div>
        

        <div>
            <h3>
              Total de Taxis en cada conteo
            </h3>
            <h5>
              (Diagrama de Área)
            </h5>
          </div>

          <div class="graf">
          <XYPlot width={window.innerWidth*0.5} height={500} xType="ordinal">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis/>
          <YAxis title="# de taxis" />
          <AreaSeries
            className="area-series-example"
            curve={'curveMonotoneX'}
            data={this.state.datataxi}
          />
        </XYPlot>
          </div>
        

        {/* //Comparaciones */}
        <div>
            <h3>
              Vehículos por tipo VS Total de Vehículos
            </h3>
          </div>
          <div>
            <h4>
              Carros VS Total de Vehículos
            </h4>
          </div>
          <div class="graf">
          <XYPlot  width={window.innerWidth*0.5} height={window.innerHeight*0.5} xType="ordinal">
         <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis  />
          <YAxis  />
          <LineSeries
            className="linemark-series-example"
            color="#ff8c00"
            data={this.state.data1}
          />
          <LineMarkSeries
           className="linemark-series-example-2"
           color="#dc143c"
            curve={'curveMonotoneX'}
           data={this.state.datacarro}
          />
       </XYPlot>
          </div>
        
       <div>
            <h4>
              Motos VS Total de Vehículos
            </h4>
          </div>
          <div class="graf">
          <XYPlot  width={window.innerWidth*0.5} height={window.innerHeight*0.5} xType="ordinal">
         <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            className="linemark-series-example"
            color="#ff8c00"
            data={this.state.data1}
          />
          <LineMarkSeries
           className="linemark-series-example-2"
           color="#4682b4"
            curve={'curveMonotoneX'}
           data={this.state.datamoto}
          />
       </XYPlot>
          </div>
       
       <div>
            <h4>
              Taxis VS Total de Vehículos
            </h4>
          </div>
          <div class="graf">
          <XYPlot  width={window.innerWidth*0.5} height={window.innerHeight*0.5} xType="ordinal">
         <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            className="linemark-series-example"
            color="#ff8c00"
            data={this.state.data1}
          />
          <LineMarkSeries
           className="linemark-series-example-2"
           color="#24bb38"
            curve={'curveMonotoneX'}
           data={this.state.datataxi}
          />
       </XYPlot>
          </div>
       
                </div>
        
        </div>
      );
    }

  }

export default analisis;