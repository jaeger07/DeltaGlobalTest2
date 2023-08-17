import styled from 'styled-components'
 
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 auto;
    padding: 0 5vw;
    max-width: 900px;
`;
export const TasksToDo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const TasksComplete = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const TittleTasksToDo = styled.h1`
    font-size: 14px;
    margin-bottom: 14px;
`;
export const TittleTasksComplete = styled.h1`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 35px 0 18px 0;
    font-size: 14px;
    margin-bottom: 14px;
`;
export const Cards = styled.div`
    display: flex;
    flex-direction: column;
`;
export const TasksToDoCard = styled.div`
    display: flex;
    width: 100%;
    background-color: #F2F2F2;
    border-radius: 8px;
    height: 75px;
    margin-bottom: 8px;
    padding: 20px 25px ;
`;

export const ButtonCheck = styled.button`

`;
export const TaskContainer = styled.div`

`;
export const TittleTask = styled.h2`
    font-size: 14px;
    font-weight: 700;
    color: #1D1D1D;
`;
export const DescriptionTask = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #828282;
`; 
export const ButtonEditTask = styled.button`

`; 
export const ButtonDeleteTask = styled.button`

`;