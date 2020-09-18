import styled from 'styled-components';

export const Container = styled.div`
  background-color: #b3b7ff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 24px 32px;
  font-family: 'Ubuntu', sans-serif;
  
  > div {
    display: flex;
    align-items: center;
    color: #fff;
    
    .completed {
      font-size: 48px;
      margin-right: 4px;
    }

    .tasks {
      font-weight: bold;
    }
  }
`;