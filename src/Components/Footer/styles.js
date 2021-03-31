import styled from 'styled-components';

export const FooterBase = styled.footer`
  font-family: 'Roboto', sans-serif;
  height: 100px;
  background: black;
  color: white;
  text-align: center;
  border-top: 9px solid #747474;
  
  
  @media screen and (max-width: 600px) {
    .infoContato{
      font-size: 10px;
    }
  }
  



  .Logo {
    max-width: 1rem;
  }

  span{margin: 5px;

  }
  address{margin: 5px;

}
  a{margin: 5px;

}
  p {
    font-family: 'Roboto', sans-serif;
  }
  
`;
