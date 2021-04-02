import styled from 'styled-components'

export const ContainerForm = {
  color: 'white',
  height: '250px',
  fontSize: '1.9rem',
  textAlign: 'center',
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

export const TagA = styled.a`
  margin-top: 1rem;
  margin: 1px 5px;
  align-content: center;
  float: center;
  margin-bottom: 10rem;

  display: inline-block;
  width: 30%;
  height: 80px;
  background-color: rgba(111, 105, 105);

  &:hover,
  &:focus {
    opacity: 0.3;
  }

  span {
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    text-align: center;
    color: white;
    line-height: 36px;

    ::marker {
      color: blue;
    }
  }
`

export const ContainerBtn = {
  textAlign: 'center',
  zIndex: '500',
  justifyContent: 'center',
}
