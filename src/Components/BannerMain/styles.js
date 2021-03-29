import styled from 'styled-components'

export const BannerMain = styled.section`
  width:100%;
  height: 224px;
  background-color: black;
  border-bottom: 9px solid #747474;
  overflow: hidden; 

  @media screen and (min-width: 601px) {
    
    #nomeEmpresa{
      display:none;
    }
  }




  @media screen and (max-width: 600px) {
    .Logo{
      display:none;
    }

    #nomeEmpresa{
     
      display: -webkit-inline-box;
      font-size: 40px;
    }
  }

  @media screen and (max-width: 900px) {
  
    .menu li:not(:first-child) {display: none;}
    .menu li.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 900px) {
    .menu.responsive li a{position: relative;}
    .menu.responsive li.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .menu.responsive li{
      float: none;
      display: block;
      text-align: left;      
    }

  }

  .Logo {
   
    width: 291.11px;
    height: 215px;
    left: 136px;
    top: 0px;
    /* max-width: 5rem;
    align-content: flex-start; */
  }





`

export const TagA = styled.a`
  padding: 2px;
  float: right;
  color: white;
  text-align: left;
  text-decoration: none;
  padding-left: 20px;
  

  &:hover,
  &:focus {
    opacity: 0.3;
  }

  span {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 24px;
  }
`


// export const ContainerPrincipal = {
//   width: '1440px',
//   height: '224px',
//   background: 'red',
// }


export const BarNav = styled.nav`
  .menu {
    list-style: none;
    float: right;
    overflow: hidden;
  }

  .menu li {
    position: relative;
    float: left;
    border-right: 1px solid #c0c0c0;
  }

  .menu li a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    display: block;
    font-size: 24px;
  }

  .menu li a:hover {
    background: #333;
    color: #fff;
    -moz-box-shadow: 0 3px 10px 0 #ccc;
    //-webkit-box-shadow: 0 3px 10px 0 #ccc;
    text-shadow: 0px 0px 5px #fff;
  }

  .menu .icon {
    display: none;
  }




 

`

