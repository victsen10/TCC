import styled from 'styled-components'

export const ContainerForm = {
  width: '99.2rem',
  height: '56.8rem',
  zIndex: '0',
  textAlign: 'center',
  Display: 'flex',
}

export const LabelIitle = {
  position: 'absolute',
  width: '41.5rem',
  height: '5.4rem',
  left: '47.1rem',
  top: '34.3rem',
  textAlign: 'center',
  zIndex: '1',
}

export const Title = {
  fontSize: '4.5rem',
  color: 'white',
}

export const FormFaleConosco = {
  width: '50%',
  height: '42.2rem',
  margin: '0.5rem',
}
export const InfoFaleConosco = {
  width: '50%',
  height: '44.2rem',
  color: 'white',
  fontSize: '2.8rem',
  borderRight: '0.5rem solid black',
}

export const ContainerFormSecundario = {
  display: 'flex',
}

export const Form = styled.form`
  div {
    width: auto;
    height: 5rem;
    text-align:left;
    background: rgba(196, 196, 196, 0.35);
    margin-top:1rem;
    
  }

  label {
    color: white;
    font-size: 2.4rem;
   
  }

  div textArea{
    height: 11.0rem;
    width:95%;
  }

  .TextAreaDiv{
    height: 18.0rem;

  }

  div input{
    width:90%;
    height:5.0rem;
    margin-left: 0.5rem;
    border:none;
    background: none;
    font-size:0.24rem;

    :-internal-autofill-selected{ 
    appearance: none;
    background-color: none;
    background-image: none;
    color:-internal-light-dark(black, white) !important;} 
  
  
    input::-webkit-input-placeholder {
    color: black;
    }
  


  
}

`
