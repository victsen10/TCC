import styled from 'styled-components'

export const ContainerImg = {
  left: '0px',
  height:'700px',
  textAlign: 'center',
}

export const ConfImg = {
  width: '1440px',
  height: '700px',
  zIndex: -1,
}

export const ContainerChild = {
  position: 'absolute',
  width: '992px',
  top: '277px',
  border: '1px solid red',
}

export const ImgBack = styled.img`
  @media screen and (max-width: 900px) {
    display: none;
  }
`
