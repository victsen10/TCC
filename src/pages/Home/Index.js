import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'
import {
  ContainerBtn,
  TagA,
  sloganInfor
} from './styles'

function Home() {
  return (
    <PageDefault>
      <div style={sloganInfor}>
        <h1>A tecnologia ao seu alcance</h1>
        <h3>Aqui o seu computador ainda tem solução.</h3>
      </div>
      <div id="containerbtn" style={ContainerBtn}>
        <TagA className="btnAssist">
          <span>
            ASSISTENCIA TÉCNICA
            <br />
            Clique Aqui!
          </span>
        </TagA>
        <TagA className="btnOrcam">
          <span>
            FAÇA SEU ORÇAMENTO
            <br />
            Clique Aqui!
          </span>
        </TagA>
      </div>
    </PageDefault>
  )
}
export default Home
