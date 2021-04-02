import styled from 'styled-components';

export const FooterBase = styled.footer`
  font-family: 'Roboto', sans-serif;
  height: 10rem;
  background: black;
  color: white;
  text-align: center;
  border-top: 0.9rem solid #747474;
  font-size: 1.2rem;
  
  
  @media screen and (max-width: 600px) {
    .infoContato{
      font-size: 1.0rem;
    }
  }
  



  .Logo {
    max-width: 1rem;
  }

  span{margin: 0.5rem;

  }
  address{margin: 0.5rem;

}
  a{margin: 0.5rem;

}
  p {
    font-family: 'Roboto', sans-serif;
  }
  
`;
