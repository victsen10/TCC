import styled from 'styled-components'

export const ContainerForm = {
 
  width: '992px',
  height: '568px',
 

  background: 'rgba(100, 99, 99, 0.51)',
  zIndex: '0',
  textAlign: 'center',
  Display: 'flex',
}

export const LabelIitle = {
  position: 'absolute',
  width: '415px',
  height: '54px',
  left: '471px',
  top: '343px',
  textAlign: 'center',
  zIndex: '1',
}

export const Title = {
  fontSize: '45px',
  color: 'white',
}

export const FormFaleConosco = {
  width: '50%',
  height: '422px',
  margin: '0.5rem',

}
export const InfoFaleConosco = {
  width: '50%',
  height: '422px',
  color: 'white',
  fontSize: '28px',
  borderRight: '5px solid black',
}

export const ContainerFormSecundario = {
  display: 'flex',
}

export const Form = styled.form`
  div {
    width: auto;
    height: 50px;
    text-align:left;
    background: rgba(196, 196, 196, 0.35);
    margin-top:10px;
    
  }

  label {
    color: white;
    font-size: 24px;
   
  }

  div textArea{
    height: 110px;
    width:95%;
  }

  .TextAreaDiv{
    height: 180px;

  }

  div input{
    width:auto;
    height:50px;
    margin-left: 0.5rem;
    border:none;
    background: none;
    font-size:24px;

    input:-internal-autofill-selected 
    appearance: none;
    background-color: none;
    background-image: none;
    color: -internal-light-dark(black, white) !important;}
  
  
    input::-webkit-input-placeholder {
    color: black;
  }
  
  

  }

  
}

`
