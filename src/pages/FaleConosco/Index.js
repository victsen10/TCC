import React from 'react';
import ReactDOM from 'react-dom';
import PageDefault from '../../Components/PageDefault/Index';

import {
  ContainerForm,
  LabelIitle,
  Title,
  FormFaleConosco,
  InfoFaleConosco,
  ContainerFormSecundario,
  Form,
  
} from './styles';

function FaleConosco() {
  return (
    <div id="ContainerLogin">
      <PageDefault />

      <div style={ContainerForm}>
        <h1 style={Title}>FALE CONOSCO</h1>
        <div id="ContainerSecundario" style={ContainerFormSecundario}>
          <div style={InfoFaleConosco}>
            Av.Bernadinho de Campos, 98
            <br />
            Mauá-SP 09145-003
            <br />
            <br />
            ti.informais@gmail.com <br />
            <br />
            <b>HORÁRIO DE FUNCIONAMENTO</b>
            <br />
            <br />
            Seg-Sex 09:00-19:00
            <br />
            Sábados 09:00-19:00
            <br />
            Domings e Feriados
          </div>

          <div style={FormFaleConosco}>
            <Form>
              <div>
                <label>Nome:</label>
                <input type="name" id="nome " name="nome"  />
              </div>
              <div>
                <label>E-Mail:</label>
                <input  type="email" id="email" name="email" />
              </div>
              <div>
                <label>Celular:</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="TextAreaDiv">
                <label>Digite sua messagem aqui:</label><br/>
                <textarea />
                <button type="submit">ENVIAR</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FaleConosco;
