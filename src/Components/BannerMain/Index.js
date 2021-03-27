import React from 'react';
import { BannerMain, TagA, BarCinza, ContainerPrincipal, ContainerLink } from './styles';
import LogInfor from '../../Assets/img/Informais.jpg';

function Banner() {
  return (
    <div id="ContainerMain" style={ContainerPrincipal}>


      <BannerMain id="BannerMain">

        <div id="Logo" className="dv1">
          <a>
            <img className="Logo" src={LogInfor} alt="whatsapp" />
          </a>
        </div>


        {/* <div style={ContainerLink}>
            <TagA href="/">
              <span>INICIO</span>
            </TagA>
            <TagA href="/QuemSomos/">
              <span>QUEM SOMOS</span>
            </TagA>
            <TagA href="/FaleConosco/">
              <span>FALE CONOSCO</span>
            </TagA>
            <TagA href="/Login/">
              <span>LOGIN</span>
            </TagA>
          </div> */}

        <nav style={ContainerLink}>
          <ul>
            <li><TagA href="/">INICIO</TagA></li>
            <li><TagA href="/Quemsomos/">QUEM SOMOS</TagA></li>
            <li><TagA href="/FaleConosco/">FALE CONOSCO</TagA></li>
            <li><TagA href="/Login/">LOGIN</TagA></li>
          </ul>
        </nav>




      </BannerMain>

      {/* <div style={BarCinza}>
        <table>
          <tr>
            <td></td>
          </tr>
        </table>
      </div> */}





    </div>
  );
}

export default Banner;
