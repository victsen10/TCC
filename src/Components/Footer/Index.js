import React from 'react';
import { FooterBase, BarCinza } from './styles';
import LogInst from '../../Assets/img/instagram2.png';
import LogWhats from '../../Assets/img/whatsapp.png';
import LogMail from '../../Assets/img/Mail.png';

function Footer() {
  return (
    <FooterBase>
      {/* <div id="ContainerFooter" style={BarCinza}>
          <table>
          <tr>
            <td></td>
          </tr>
        </table>
      </div> */}
      <div id="dvfooster">
        <div>
          <span> INFOR+</span>
          <span>
            <a>A TECNOLOGIA AO SEU ALCANCE</a>
          </span>

          <span>
            <a>
              <img className="Logo" src={LogMail} alt="Email" />
            </a>
            <a>ti.informais@gmail.com</a>
          </span>
          <span>
            <a href="">
              <img className="Logo" src={LogInst} alt="instagram" />
            </a>
          </span>
          <span>
            <a href="https://api.whatsapp.com/send?phone=5511980755879">
              <img className="Logo" src={LogWhats} alt="whatsapp" />
            </a>
            Whats/Cel.:+55 (11) 98075-5879
          </span>
        </div>
      </div>
    </FooterBase>
  );
}
export default Footer;
