import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import aforoinfo from './components/aforoinfo';
import aforocont from './components/aforocont';
import operadores from './components/operadores';
import Login from './components/Login';
import MenuCoord from './components/MenuCoord';
import Personalizacion from './components/Personalizacion';
import analisis from './analisis';
import resultados from './components/resultados';
import gracias from './components/gracias';
import RegistroOp from './components/RegistroOp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/aforoinfo' component={aforoinfo} />
      <Route path='/operadores' component={operadores} />
      <Route path='/aforocont' component={aforocont} />
      <Route path='/gracias' component={gracias} />
      <Route path='/analisis' component={analisis} />
      <Route path='/resultados' component={resultados} />
      <Route path='/Login' component={Login} />
      <Route path='/MenuCoord' component={MenuCoord} />
      <Route path='/Personalizacion' component={Personalizacion} />
      <Route path='/RegistroOp' component={RegistroOp} />
   </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
