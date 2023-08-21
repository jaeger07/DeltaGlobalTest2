import styled from 'styled-components'
import check from '../../../Assets/Button/check.svg'

export const TasksToDoCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    background-color: ${props => props.theme.colors.bgDiv};
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 20px 25px ;
`;

export const ButtonCheck = styled.button`
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.buttonCheck};
    padding: 10px;
    background: center center url(${check}) no-repeat;
    background-color: #2D9CDB;
    border: 2px solid #2D9CDB;
    
    &:hover{
    background: none;
    }
`;
export const TaskContainer = styled.div`
    width: 100%;
    margin: 0 15px;
`;
export const TittleTask = styled.h2`
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: ${props => props.theme.colors.textTittleCompleted};
`;
export const DescriptionTask = styled.p`
    font-size: 12px;
    font-weight: 400;
    text-decoration: line-through;
    color: ${props => props.theme.colors.textDescriptionCompleted};
`; 
export const ButtonHandleTask = styled.img`
padding: 10px;
border-radius: 50%;
cursor: pointer;
&:hover{
    background-color: ${props => props.theme.colors.bgButton};
    }
`;
