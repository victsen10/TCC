import React from 'react'
import PageDefault from '../../Components/PageDefault/Index'
import {
  ContainerForm,
  LabelIitle,
  Title,
  ContainerTabela,
  ContainerDivDrop,
} from './styles'

export default function Pedidos() {
  return (
    <div id="ContainerPedidos">
      <PageDefault>
        <div id="containerTitle" style={LabelIitle}>
          <h1 style={Title}>Visualização de Pedidos</h1>
        </div>

        <div id="tabela" style={ContainerForm}>
          <table style={ContainerTabela}>
            <tr>
              <th> OS </th>
              <th> Data </th>
              <th> Título </th>
              <th> Descrição </th>
              <th> Status </th>
              <th> Ações </th>
            </tr>
            <tr>
              <td> 001 </td>
              <td> 01/04/2021 </td>
              <td> Solicitação de Reparo </td>
              <td> Tela trincada </td>
              <td> Aberto </td>
              <ContainerDivDrop className="dropdown">
                <button onClick={fndropdown} className="dropbtn">
                  Detalhes
                </button>
                <div id="dvDropdown" className="dropdownContent">
                  <a href="#Editar">Editar</a>
                  <a href="#Excluir">Excluir</a>
                  <a href="#Imprimir">Imprimir</a>
                </div>
              </ContainerDivDrop>
            </tr>
          </table>
        </div>
      </PageDefault>
    </div>
  )
}



function fndropdown() {
  document.getElementById("dvDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdownContent')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
