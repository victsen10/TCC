import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'

import { ContainerForm, LabelIitle, Title, ContainerFormLogin,ContainerLabel,  ContainerLabel2 } from './styles'

function Upgrade() {
  return (
    <div id="ContainerLogin">
      <PageDefault>
        <div id="containerTitle" style={LabelIitle}>
          <h1 style={Title}>Solicitação de Upgrade</h1>
        </div>

        <div id="formModel" style={ContainerForm}>
          <ContainerFormLogin>
            <div>
            <label for="inputModelo" style={ContainerLabel}>MODELO:</label>
              <input
                class="float w100 h40"
                type="text"
                id="modelo"
                name="modelo"

              />
            </div>
            <div>
            <label for="inputModelo" style={ContainerLabel2}>COMPONENTE:</label>
              <input
                class="float w150 h40"
                type="text"
                id="sintoma"
                name="sintoma"
                // placeholder="Sintomas:"
              />
            </div>
            <div>
                
              <textarea
                class="float w150 h40"
                type="text"
                id="detalhamento"
                name="detalhamento"
                placeholder="Detalhamento:"
              />
            </div>
            

          </ContainerFormLogin>
        </div>

          
      </PageDefault>
    </div>
  )
}

export default Upgrade
