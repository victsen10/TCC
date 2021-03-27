import React from 'react';
import ReactDOM from 'react-dom';
import PageDefault from '../../Components/PageDefault/Index';

import { ContainerForm,LabelIitle,Title} from './styles';

function Login() {
  return (
    <div id="ContainerLogin">
      <PageDefault/>

      <div id="containerTitle" style={LabelIitle}>
        <h1 style={Title} >LOGIN</h1>
      </div>
  
      <div style={ContainerForm}>





      </div>
    </div>
    
  );
}
export default Login;
