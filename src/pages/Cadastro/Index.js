import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'

import { ContainerForm, LabelIitle, Title } from './styles'

function Cadastro() {
  return (
    <div id="ContainerCadastro">
      <PageDefault>
        <div style={ContainerForm}>
          <div id="containerTitleCadastro" style={LabelIitle}>
            <h1 style={Title}>CADASTRO</h1>
          </div>
        </div>
      </PageDefault>
    </div>
  )
}
export default Cadastro
