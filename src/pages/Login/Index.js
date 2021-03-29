import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'

import { ContainerForm, LabelIitle, Title } from './styles'

function Login() {
  return (
    <div id="ContainerLogin">
      <PageDefault>
        <div id="containerTitle" style={LabelIitle}>
          <h1 style={Title}>LOGIN</h1>
        </div>

        <div style={ContainerForm}></div>
      </PageDefault>
    </div>
  )
}
export default Login
