import styled from 'styled-components'

export const Container = {
  textAlign: 'center',
  position: 'relative',
  background: 'black',
}

export const TagDiv = styled.div`
  background-color: #747474;
  width: 100%;
  margin: 0px 0 1rem 0;
  color: white;
  justify-content: center;
`

export const TagA = styled.a`
  margin-top: 1rem;
  margin: 0px 3.3rem;
  align-content: center;

  display: inline-block;
  width: 29.4rem;
  height: 8rem;
  background-color: rgba(111, 105, 105);

  &:hover,
  &:focus {
    opacity: 0.3;
  }

  span {
    font-size: 1.6rem;
    line-height: 2rem;
    
    font-family: 'Roboto', sans-serif;
    align-items: center;
    text-align: center;
    color: white;

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
  fontSize: '3rem',
  textAlign: 'center',
}
