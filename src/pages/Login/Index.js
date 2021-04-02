import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'

import { ContainerForm, LabelIitle, Title, ContainerFormLogin } from './styles'

function Login() {
  return (
    <div id="ContainerLogin">
      <PageDefault>
        <div id="containerTitle" style={LabelIitle}>
          <h1 style={Title}>LOGIN</h1>
        </div>

        <div id="formLogin" style={ContainerForm}>
          <ContainerFormLogin>
            <div>
              <input
                class="float w100 h40"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail/Login:"
              />
            </div>
            <div>
              <input
                class="float w100 h40"
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha:"
              />
              <div>
                <label
                  style={{
                    color: 'white',
                    fontSize: '1.6rem',
                    textAlign: 'left',
                  }}
                >
                  Esqueceu a senha?{' '}
                  <span id="esqueceuSenha">
                    <a href="#">Clique Aqui!</a>
                  </span>
                </label>
              </div>
            </div>
            <input
              id="submit"
              class="inlineBlock h40"
              type="submit"
              value="Logar"
            />

            <div>
              <label
                style={{
                  color: 'white',
                  fontSize: '1.6rem',
                  paddingTop: '0.5rem',
                }}
              >
                Primeiro acesso?{' '}
                <span id="primeiroAcesso">
                  <a href="/Cadastro/">Clique Aqui!</a>
                </span>
              </label>
            </div>
          </ContainerFormLogin>
        </div>
      </PageDefault>
    </div>
  )
}
export default Login
