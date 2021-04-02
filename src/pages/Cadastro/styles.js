import styled from 'styled-components'

export const LabelIitle = {
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

export const FormContainer = styled.div`
  position: relative;
  margin-left: 1.5rem;
  font-weight: bolder;
  align-items: center;
  text-align: -webkit-center;
  text-align-last: left;

  .form1,
  .form2 {
    width: 50%;
  }
  .inputDate {
    width: 16%;
  }
  .labelFormNome {
    top: 0;
    left: 0;
    right: 0;
    color: #ffffff;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 0.1rem;
    cursor: text;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }
  .labelFormCPF {
    top: 0;
    left: 150px;
    right: 0;
    color: #ffffff;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 0.1rem;
    cursor: text;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }

  input {
    height: 2.5rem;
    font-size: 0.1rem;
    border: 0;
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    background-color: transparent;
    color: #ffffff;
  }

  input:valid,
  input:focus {
    border-bottom: 2px solid #ffffff;
  }

  input:valid + label,
  input:focus + label {
    color: #ffffff;
    font-size: 0.1rem;
    top: -05px;
    pointer-events: none;
  }

  fieldset {
    color: #ffffff;
    margin-top: 0.5rem;
  }
`
