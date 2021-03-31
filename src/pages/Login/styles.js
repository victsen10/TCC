import styled from 'styled-components'

export const ContainerForm = {
  width: '992px',
  height: '568px',
  
}

export const LabelIitle = {
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  fontSize: '32px',
  // border:'1px solid red',
  zIndex: '1',
}

export const Title = {
  fontSize: '45px',
  color: 'white',
  // border:'1px solid blue',
  height: '50px',
  fontSize: 'Bold',
  color: '#fff',
  lineHeight: '50px',
}

export const ContainerFormLogin = styled.div`
  /* position:absolute; */

  padding-top: 20%;
  /* border: 1px solid blue; */
  text-align: center;

  input {
    font-size: 45px;
    margin: 1.5rem;
    border-radius: 0.5rem;
    border: 0;
    border-bottom: 2px solid #9e9e9e;
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }
  #submit {
    background-color: black;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:visited {
    color: #ffffff;
  }
  a:hover {
    color: #000000;
    text-decoration: underline;
  }
  a:active {
    color: #c0c0c0;
    text-decoration: underline;
    background-color: #000000;
  }
`
