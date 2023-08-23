import styled from 'styled-components'


 export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 5vw;
    max-width: 900px;
`;


export const ContainerTasks = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const TasksToDo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 150px;
    margin-top: 35px;
`;
export const TittleTasksToDo = styled.h1`
    font-size: 14px;
    margin-bottom: 14px;
`;
export const TittleTask = styled.h2`
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: ${props => props.theme.colors.textTaskTittle};
`;
export const DescriptionTask = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${props => props.theme.colors.textTaskDescription};
`; 
export const ButtonHandleTask = styled.img`
padding: 10px;
border-radius: 50%;
cursor: pointer;
&:hover{
    background-color: ${props => props.theme.colors.bgButton};
    }
`;

export const ButtonAddTask = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.bgButtonBlue};
    padding: 16px 24px;
    margin-left: calc(100% - 200px);
    border-radius: 8px;
    color: ${props => props.theme.colors.textButtonBlue};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
`;

export const IconPlus = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    margin-right: 10px;
`;

export const TasksComplete = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
