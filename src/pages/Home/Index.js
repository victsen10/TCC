import React from 'react';
import ReactDOM from 'react-dom';
import PageDefault from '../../Components/PageDefault/Index';
import BackImg from '../../Assets/img/fundo.png';
import { ContainerBtn,TagA,ContainerImg, ConfImg } from './styles';

function Home() {
  return (
    <div id="ContainerLogin">

      <div id='continerImag' style={ContainerImg}>
        <img style={ConfImg} src ={BackImg} alt="ImgBackGround"/>
      </div>



      <div id='containerbtn' style={ContainerBtn}>
        <TagA>
          <span>ASSISTENCIA TÉCNICA<br/>Clique Aqui!</span>
        </TagA>
        <TagA>
          <span>FAÇA SEU ORÇAMENTO<br/>Clique Aqui!</span>
        </TagA>
      </div>


    </div>



   
   
  );
}
export default Home;
