//parametro padrao
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//componente fixo
import Footer from '../src/Components/Footer/Index';
import BannerMain from '../src/Components/BannerMain/Index';

//componente variavel
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import QuemSomos from './pages/QuemSomos/Index';
import FaleConosco from './pages/FaleConosco/Index';

const PaginaContrucao = () => <div>Em construção</div>;

ReactDOM.render(
  <BrowserRouter>
  <BannerMain/>
    <Switch>
      
      <Route path="/" component={Home} exact />
      <Route path="/Login/" component={Login} exact />
      <Route path="/QuemSomos/" component={QuemSomos} exact />
      <Route path="/FaleConosco/" component={FaleConosco} exact />
      <Route path="/produto/chas" component={PaginaContrucao} />
      <Route component={() => <div>Página 404</div>} />


    </Switch>
    <Footer/>
  </BrowserRouter>,

  document.getElementById('root')
);