import React from 'react';
import ReactDOM from 'react-dom';
import PageDefault from '../../Components/PageDefault/Index';
import '../../fonts/DenkOne-Regular.ttf';
import { ContainerForm, LabelIitle, Title, Text } from './styles';

function QuemSomos() {
  return (
    <div id="ContainerQuem">
      <PageDefault />

      

      <div style={ContainerForm}>
      
        <h1 style={Title}>Quem Somos</h1>

        <h1 style={Text}>
          A Informais é uma Empresa de Tecnologia, Informação e Comunicação que
          está em vigor desde 2003, surgiu na vida do CEO Rogério como um hobby
          e depois de 2 anos tornou-se uma fonte de renda. Tem como principais
          funções montagem e manutenção de computadores, notebooks, celulares,
          impressoras e tablets, além da venda de alguns itens para a realização
          do serviço e de interesse do cliente, como teclados, telas,
          impressoras, acessórios para computadores e celulares, e afins. A
          empresa oferece também a instalação e configuração de anti-virus,
          pacote Office e outros.
        </h1>
      </div>
    </div>
  );
}
export default QuemSomos;
