import React from 'react';
import ReactDOM from 'react-dom';
import BackImg from '../../Assets/img/fundo2.png';
import { ConfImg, ContainerImg } from './styles';

function PageDefault(Page) {
  return (
    <div id="ContainerDefault">
      <div id="continerImag" style={ContainerImg}>
        <img style={ConfImg} src={BackImg} alt="ImgBackGround" />
      </div>
    </div>
  );
}
export default PageDefault;
