import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'

import { LabelIitle, Title, FormContainer } from './styles'

function Cadastro() {
  return (
    <PageDefault>
      <div id="ContainerCadastro">
        <div>
          <div id="containerTitleCadastro" style={LabelIitle}>
            <h1 style={Title}>CADASTRO</h1>
          </div>
          <FormContainer>
            <fieldset className="form1">
              <legend>DADOS PESSOAIS</legend>
              <dl>
                <dd>
                  <input
                    type="text"
                    name="name"
                    className="inputName"
                    placeholder="Digite seu nome"
                    maxLength="240"
                  />
                </dd>

                <dd>
                  <input
                    type="email"
                    name="email"
                    className="inputEmail"
                    placeholder="Digite seu E-mail"
                    maxLength="240"
                  />
                </dd>

                <dd>
                  <input
                    type="date"
                    name="nascimento"
                    className="inputNascimento"
                    placeholder="Digite seu E-mail"
                    maxLength="240"
                  />
                </dd>
              </dl>
            </fieldset>
            <fieldset className="form2">
              <legend>LOCALIZAÇÃO</legend>
              <dl>
                <dd>
                  <input
                    type="text"
                    name="name"
                    className="inputName"
                    placeholder="Digite seu nome"
                    maxLength="240"
                  />
                </dd>

                <dd>
                  <input
                    type="email"
                    name="email"
                    className="inputEmail"
                    placeholder="Digite seu E-mail"
                    maxLength="240"
                  />
                </dd>

                <dd>
                  <input
                    type="date"
                    name="nascimento"
                    className="inputNascimento"
                    placeholder="Digite seu E-mail"
                    maxLength="240"
                  />
                </dd>
              </dl>
            </fieldset>
            <button type='submit'>Cadastrar</button>
          </FormContainer>
        </div>
      </div>
    </PageDefault>
  )
}
export default Cadastro



// Proximos passos:
// --- configurar o Botão
// ---  acrescentar os dados
// ---verificar a possibilidade de alinhar a leftfieldset
 