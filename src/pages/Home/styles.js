import styled from 'styled-components'

export const ContainerPrincipal = styled.div`
  width: 100%;
  background-color: black;

  #containerbtn {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 600px) {
    .continerImag img {
      display: none;
    }
    .btnOrcam {
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 700px) {
    .btnOrcam {
      margin-top: 1rem;
    }
  




  }
`

export const Container = {
  textAlign: 'center',
  position: 'relative',
  background: 'black',
}

export const TagDiv = styled.div`
  background-color: #747474;
  width: 100%;
  margin: opx 0 10px 0;
  color: white;
  justify-content: center;
`

export const TagA = styled.a`
  margin-top: 1rem;
  margin: 0px 33px;
  align-content: center;

  display: inline-block;
  width: 294px;
  height: 80px;
  background-color: rgba(111, 105, 105);

  &:hover,
  &:focus {
    opacity: 0.3;
  }

  span {
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    text-align: center;
    color: white;
    line-height: 40px;

    ::marker {
      color: blue;
    }
  }
`

export const ContainerBtn = {
  textAlign: 'center',
  zIndex: '100',
}

export const ContainerImg = {
  left: '0px',
  textAlign: 'center',
}

export const ConfImg = {
  maxWidth: '1440px',
  maxHeight: '700px',
   width: 'auto',
  height: 'auto',
}
