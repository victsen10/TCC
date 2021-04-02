import styled from 'styled-components'

export const ContainerImg = {
  left: '0px',
  height:'70rem',
  textAlign: 'center',
}

export const ConfImg = {
  width: '144rem',
  height: '70rem',
  zIndex: -1,
}

export const ContainerChild = {
  position: 'absolute',
  width: '992px',
  height: '56.8rem',
  top: '27.7rem',
  left:'50%',
  transform: 'translate(-50%)',
  borderRadius: '2.5rem',
  background: 'rgba(100, 99, 99, 0.51)'
}

export const ImgBack = styled.img`
  @media screen and (max-width: 900px) {
    display: none;
  }
`
