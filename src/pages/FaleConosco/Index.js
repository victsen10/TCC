import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'

import {
  ContainerForm,
  Title,
  FormFaleConosco,
  InfoFaleConosco,
  ContainerFormSecundario,
  Form,
} from './styles'




export default function FaleConosco() {
  return (
    <div id="ContainerFaleConosco">
      <PageDefault>
        <div id="Form" style={ContainerForm}>
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
                  <input
                    type="name"
                    id="nome "
                    placeholder="Digite seu nome"
                    name="nome"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Digite seu E-mail"
                    id="email"
                    name="email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Digite seu Telefone"
                    name="phone"
                  />
                </div>
                <div className="TextAreaDiv">
                  <label style={{ color: 'black' }}>
                    Digite sua messagem aqui:
                  </label>
                  <br />
                  <textarea />
                  <button type="submit">ENVIAR</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </PageDefault>
    </div>
  )
}
