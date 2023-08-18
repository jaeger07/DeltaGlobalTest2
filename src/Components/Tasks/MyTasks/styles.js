import styled from 'styled-components'
 
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const TasksToDo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const TittleTasksToDo = styled.h1`
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

export const ButtonAddTask = styled.button`
display: flex;
align-items: center;
background-color: #2D9CDB;
padding: 16px 24px;
max-width: 200px;
border-radius: 8px;
color: #FFFFFF;
font-size: 14px;
font-weight: 700;
letter-spacing: 1px;
margin: 35px 0;
`;

export const IconPlus = styled.img`
display: flex;
align-items: center;
justify-content: center;
height: 20px;
width: 20px;
`;



export const ModalContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
`;
export const ModalExit = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(30,30,30,0.4);
`;
export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    z-index: 2;
    padding: 42px;
    width: 500px;
    height: 400px;
    background-color: #FFFFFF;
    
`;
export const ModalTittle = styled.h1`
    color: #343434;
    font-size: 18px;
    font-weight: 700;
`;
export const ModalLabel = styled.label`
    color: #828282;
    font-size: 14px;
    font-weight: 400px;
`;

export const ModalInput = styled.input`
    width: 412px;
    height: 48px;
    background-color: #F2F2F2;
    border-radius: 8px;
`;
export const ModalTextArea = styled.textarea`
    width: 412px;
    height: 68px;
    background-color: #F2F2F2;
    border-radius: 8px;
`;
export const ModalButtonDelete = styled.button`

`;

export const ModalButtonCancel = styled.button`
    padding: 20px;
    border: 2px solid #828282;
    border-radius: 8px;
`;
