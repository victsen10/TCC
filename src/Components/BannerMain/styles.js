import styled from 'styled-components';

export const BannerMain = styled.section `
  position: absolute;
  width: 1440px;
  height: 224px;
  background-color: black;
  border-bottom: 9px solid #747474;

  .Logo {
    position: absolute;
    width: 291.11px;
    height: 215px;
    left: 136px;
    top: 0px;
    /* max-width: 5rem;
    align-content: flex-start; */
  }
`;

export const TagA = styled.a `
  padding: 2px;
  float: left;
  color: white;
  text-align: left;
  text-decoration: none;
  padding-left: 20px;

  &:hover,
  &:focus {
    opacity: 0.3;
  }

  span {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 24px;
  }
`;

export const BarCinza = {
    position: 'absolute',
    background: '#747474',
    width: '1440px',
    height: '9px',
    left: '0px',
    top: '215px',
    // margin: '0.5rem',
};

export const ContainerPrincipal = {
    width: '1440px',
    height: '224px',
    background: 'red',

};

export const ContainerLink = {
    // position: 'absolute',
    width: '686px',
    height: '30px',
    left: '756px',
    top: '157.86px',

};