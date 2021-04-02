import styled from 'styled-components'

export const ContainerForm = {
  width: '992px',
  height: '568px',
}

export const LabelIitle = {
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  fontSize: '3.2rem',
  // border:'1px solid red',
  zIndex: '1',
}

export const Title = {
  fontSize: '4.5rem',
  color: 'white',
  // border:'1px solid blue',
  height: '50px',
  lineHeight: '5.0rem',
}

export const ContainerFormLogin = styled.div`
  /* position:absolute; */

  padding-top: 20%;
  /* border: 1px solid blue; */
  text-align: center;

  input {
    font-size: 5.1rem;
    margin: 1.2rem;
    border-radius: 0.5rem;
    border: 0;
    border-bottom: 2px solid #9e9e9e;
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    border-width: 0px;
    border: none;
  }

  textarea {
    width: 81%;
    height: 100px;
    margin: 1.5rem;
    padding: 15px 25px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 0.5rem;
    background-color: #f8f8f8;
    font-size: 1.6rem;
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
export const ContainerLabel = {
  fontSize: '5.1rem',
  color: 'white',
}

export const ContainerLabel2 = {
  fontSize: '4.6rem',
  color: 'white',
}
