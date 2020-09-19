import styled from 'styled-components';

export const ContainerTaskList = styled.div`
    display: flex;
    border-top: 1px solid #DCDCDC;
    justify-content: space-between;
    padding: 10px 20px;
    

    .check_title{
        display: flex;
        align-items: center;
        max-width: 90%;

        span{
            margin-left: 5px;
            overflow: hidden;
        }
    }

`;
