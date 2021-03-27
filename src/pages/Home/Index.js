import React from 'react'

import BackImg from '../../Assets/img/fundo.png'
import {
  ContainerBtn,
  TagA,
  ContainerImg,
  ConfImg,
  ContainerPrincipal,
} from './styles'

function Home() {
  return (
    <ContainerPrincipal id="ContainerHome">
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

      <div className="continerImag" style={ContainerImg}>
        <img style={ConfImg} src={BackImg} alt="ImgBackGround" />
      </div>
    </ContainerPrincipal>
  )
}
export default Home
