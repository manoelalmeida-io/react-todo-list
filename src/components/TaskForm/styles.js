import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin-top: 1px;

  button {
    outline:none;
    cursor:pointer;
  }

  form {
    padding: 16px 16px 0px 16px;
    display: flex;
    flex-direction: column;

    label {
      opacity: 0.35;
      font-weight: bold;
    }

    input, textarea {
      outline: none;
      font-size: 14px;
      border-radius: 3px;
      border: 1px #d3d3d3 solid;
      padding: 4px;
      margin: 8px 0;
      resize: none;
      font-family: 'Roboto', sans-serif;
    }

    button{
      margin-top:7px;
      font-size:15px;
      padding: 5px 0;
      color:white;
      border-radius:3px;
      border: none;
      background-color: #5262eb;
      :hover{
        background-color: #3545cc;
      }
    }
  }
`;

export const FloatingButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: -18px;
  background-color: ${ props => props.show ? '#ef5350' : '#5262eb' };
  transform: ${ props => props.show ? 'rotate(45deg)' : 'rotate(0deg)' };
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  transition-duration: 250ms;
`;