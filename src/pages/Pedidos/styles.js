import styled from 'styled-components'

export const ContainerForm = {
  width: '80%',
  height: '400px',
  fontSize: '2.4rem',
  textAlign: 'center',
  justifyContent: 'center',
  position: 'relative',
  top: '30px',
  right: '93px',
  padding: '100px',
  border: '80%',
}

export const ContainerTabela = {
  border: '4px solid #ddd',
  padding: '0px',
  height: '100px',
  width: '980px',
}

export const LabelIitle = {
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  fontSize: '3.2rem',
  zIndex: '1',
}

export const Title = {
  fontSize: '4.5rem',
  color: 'white',
  height: '50px',
  lineHeight: '5.0rem',
}

export const ContainerDivDrop = styled.div`
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropbtn {
    padding: 10px;
    font-size: 2rem;
    cursor: pointer;
    background-color: white;
    &:hover {
      background-color: #c9c9c9;
    }
  }

  .dropdownContent {
    display: none;
    position: absolute;
    min-width: 160px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdownContent a {
    color: black;
    padding: 12px 20px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #f1f1f1;
    }
  }

  .show {
    display: block;
  }
`
