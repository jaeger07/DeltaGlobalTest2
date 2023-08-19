import styled from 'styled-components'
import check from '../../../Assets/Button/check.svg'
 
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const TasksToDo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    background-color: #F2F2F2;
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 20px 25px ;
`;

export const ButtonCheck = styled.button`
    border-radius: 50%;
    border: 2px solid #BDBDBD;
    padding: 10px;
    
    &:hover{
    background: center center url(${check}) no-repeat;
    background-color: #2D9CDB;
    border: 2px solid #2D9CDB;
    }
`;
export const TaskContainer = styled.div`
    width: 100%;
    margin: 0 15px;
`;
export const TittleTask = styled.h2`
    font-size: 18px;
    font-weight: 700;
    color: #1D1D1D;
`;
export const DescriptionTask = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #828282;
`; 
export const ButtonHandleTask = styled.img`
padding: 10px;
border-radius: 50%;
&:hover{
    background-color: #E0E0E0;
    }
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
`;

export const IconPlus = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
`;



export const TasksComplete = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
    width: 500px;
    background-color: #FFFFFF;
    border-radius: 8px;
`;

export const ModalButtonClose = styled.img`
    margin-top: 18px;
    margin-left: calc(100% - 43px);
    padding: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ModalFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 42px;
`;
export const ModalTittle = styled.h1`
    margin-bottom: 30px;
    color: #343434;
    font-size: 18px;
    font-weight: 700;
`;
export const ModalLabel = styled.label`
    color: #828282;
    font-size: 14px;
    font-weight: 400px;
    line-height: 28px;
`;

export const ModalInput = styled.input`
    width: 412px;
    height: 48px;
    margin-bottom: 25px;
    padding-left: 10px;
    font-size: 18px;
    background-color: #F2F2F2;
    border-radius: 8px;
`;
export const ModalTextArea = styled.textarea`
    width: 412px;
    height: 68px;
    margin-bottom: 30px;
    padding: 10px;
    background-color: #F2F2F2;
    border-radius: 8px;
    resize: none;
    &::-webkit-scrollbar {
        width: 5px;
        background: #F4F4F4;
    }
    &::-webkit-scrollbar-thumb {
        background: #cecece;
        border-radius: 8px;
    }
`;
export const ModalContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
`;
export const ModalButtonDelete = styled.button`

`;

export const ModalButtonCancel = styled.button`
    padding: 16px 24px;
    border: 2px solid #1D1D1D;
    background-color: #FFF;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 800;
`;
