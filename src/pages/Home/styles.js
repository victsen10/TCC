import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
  /* max-width: 1440px;
  height: 709px; */
  /* min-width: 800;
  min-height: 600; */
  background-color: 'black';
`;

export const Container = {
  textAlign: 'center',
  position: 'relative',
  background: 'black',
};

export const TagDiv = styled.div`
  background-color: #747474;
  width: 100%;
  margin: opx 0 10px 0;
  color: white;
  justify-content: center;
`;

export const TagA = styled.a`
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

    ::marker {
      color: blue;
    }
  }
`;

export const ImgBack = styled.image`
  

img {

    /* max-width: 100%;
    max-height: 768px;
    min-width: 800;
    min-height: 600; */
  }
`;

export const ContainerBtn = {

  position: 'absolute',
  textAlign: 'center',
  width: '720px',
  height: '121px',
  left: '385px',
  top: '722px',
  
  // background: 'black',
};

export const ContainerImg = {
  // position: 'absolute', 
  left: '0px',
 
  // marginLeft:'0.5rem'
  
};

export const ConfImg ={
  
    width: '1440px',
    height: '700px',
   
}