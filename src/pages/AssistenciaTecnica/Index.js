import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'

import { ContainerForm, LabelIitle, Title, TagA, ContainerBtn } from './styles'

function AssistenciaTecnica() {
  return (
    <div id="ContainerAssistenciaTecnica">
      <PageDefault>
        <div style={ContainerForm}>
          <div id="containerTitleAssistenciaTecnica" style={LabelIitle}>
            <h1 style={Title}>Assistência Técnica</h1>
          </div>
        </div>

        <div id="containerbtn" style={ContainerBtn}>
          <TagA className="btnReparo">
            <span>
              REPARO
              <br />
              Clique Aqui!
            </span>
          </TagA>
          <TagA className="btnServ">
            <span>
              ORDEM DE SERVIÇO
              <br />
              Clique Aqui!
            </span>
          </TagA>
          <TagA className="btnUpgrade">
            <span>
              UPGRADE
              <br />
              Clique Aqui!
            </span>
          </TagA>
          </div>

        
      </PageDefault>
    </div>
  )
}
 export default AssistenciaTecnica
