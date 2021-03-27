import React from 'react'
import { BannerMain, BarNav } from './styles'
import LogInfor from '../../Assets/img/Informais.jpg'

function myFunction() {
  var x = document.getElementById('myMenuNav')

  if (x.className === 'menu') {
    x.className += ' responsive'
    console.log("responsive")
      } else {
    x.className = 'menu'
    console.log("menu")
   
    
  }
}

export default function Banner() {
  return (
    <BannerMain id="BannerMain">
      <div id="Logo" className="LogoImg">
        <a>
          <img className="Logo" src={LogInfor} alt="whatsapp" />
        </a>
      </div>

      <BarNav>
        <ul className="menu" id="myMenuNav">
          <li>
            <a href="/" className="active">HOME</a>
          </li>
          <li>
            <a href="/Quemsomos/">QUEM SOMOS</a>
          </li>
          <li>
            <a href="/FaleConosco/">FALE CONOSCO</a>
          </li>
          <li>
            <a href="/Login/">LOGIN</a>
          </li>
          <li className="icon">
            <a href="javascript:void(0);"  onClick={myFunction}>
              <i class="fa fa-bars"></i>{' '}
            </a>
          </li>
        </ul>
      </BarNav>
    </BannerMain>
  )
}
