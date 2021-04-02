import React from 'react'
import BackImg from '../../Assets/img/fundo2.png'
import { ConfImg, ContainerImg, ContainerChild,ImgBack } from './styles'

export default function PageDefault({ children }) {
  return (
    <div id="ContainerDefault">
      <div id="children" style={ContainerChild}>
        {children}
      </div>
      <div id="continerImag" style={ContainerImg}>
        <ImgBack id='img' style={ConfImg} src={BackImg} alt="ImgBackGround" />
      </div>
    </div>
  )
}

/* codigo nao necessario*/

// function moveForm() {
  
//   var div = 'children';
//   var larguraTela = window.innerWidth;
//   var widthDIV = parseFloat(document.getElementById(div).style.width);
//   var posicaoX = larguraTela / 2 - widthDIV / 2

//   console.log('Dimensão da tela: ' + larguraTela)
//   console.log('Tamanho da Div: ' + widthDIV)
//   console.log('Posição da left: ' + posicaoX)


//   document.getElementById(div).style.width = widthDIV + 'px'
//   document.getElementById(div).style.left = posicaoX + 'px'
// }

// window.addEventListener('load', function () {
//   moveForm()
// });

// window.addEventListener('resize', function () {
//   moveForm()
//  })

