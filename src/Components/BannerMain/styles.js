import styled from 'styled-components'

export const BannerMain = styled.section`
  width: 100%;
  height: 22.4rem;
  background-color: black;
  border-bottom: 0.9rem solid #747474;
  overflow: hidden;

  @media screen and (min-width: 601px) {
    #nomeEmpresa {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .Logo {
      display: none;
    }

    #nomeEmpresa {
      display: -webkit-inline-box;
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 900px) {
    .menu li:not(:first-child) {
      display: none;
    }
    .menu li.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 900px) {
    .menu.responsive li a {
      position: relative;
    }
    .menu.responsive li.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .menu.responsive li {
      float: none;
      display: block;
      text-align: left;
    }
  }

  .Logo {
    width: 29.111rem;
    height: 21.5rem;
    left: 13.6rem;
    
  }
`

export const TagA = styled.a`
  padding: 2rem;
  float: right;
  color: white;
  text-align: left;
  text-decoration: none;
  padding-left: 2rem;

  &:hover,
  &:focus {
    opacity: 0.3;
  }

  span {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 1.6rem;
  }
`

export const BarNav = styled.nav`
  .menu {
    list-style: none;
    float: right;
    overflow: hidden;
  }

  .menu li {
    position: relative;
    float: left;
    border-right: 0.1rem solid #c0c0c0;
  }

  .menu li a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
    font-size: 1.6rem;
  }

  .menu li a:hover {
    background: #333;
    color: #fff;
    -moz-box-shadow: 0 0.3rem 1rem 0 #ccc;
    text-shadow: 0px 0px 0.5rem #fff;
  }

  .menu .icon {
    display: none;
  }
`
