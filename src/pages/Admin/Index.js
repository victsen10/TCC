import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'

import {LabelIitle, Title } from './styles'

function Admin() {
  return (
    <PageDefault>
      <div id="ContainerCadastro">
        <div>
          <div id="containerTitleCadastro" style={LabelIitle}>
            <h1 style={Title}>ADMINISTRADOR</h1>
          </div>

        </div>
      </div>
    </PageDefault>
  )
}
export default Admin