import styled from 'styled-components'

export const ContainerForm = {
  width: '99.2rem',
  height: '56.8rem',
}

export const LabelIitle = {
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  fontSize: '4rem',
   zIndex: '1',
}

export const Title = {
  height: '50px',
  fontSize: 'Bold',
  color: '#fff',
  lineHeight: '5.0rem',
}

export const ContainerFormLogin = styled.div`
  padding-top: 20%;
  text-align: center;

  input {
    font-size: 3rem;
    margin:1rem;
    border-radius: 0.5rem;
    border: 0;
    border-bottom: 2px solid #ffff;
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    background-color:transparent;
  }
  #submit {
    background-color: black;
    border-bottom:none;
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
