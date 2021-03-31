import styled from 'styled-components'

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

export const sloganInfor = {
  color: 'white',
  height: '400px',
  fontSize: '1.5rem',
  textAlign: 'center',
}
