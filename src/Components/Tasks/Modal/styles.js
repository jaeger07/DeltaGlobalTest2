
import styled from 'styled-components'





export const ButtonAddTask = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.bgButtonBlue};
    padding: 16px 24px;
    max-width: 200px;
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
`;





export const ModalContainer = styled.div`
    position: fixed ;
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
    background-color: ${props => props.theme.colors.bgOpacityModal};
`;

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: 500px;
    background-color: ${props => props.theme.colors.bgModal};
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
        background-color: ${props => props.theme.colors.bgButton};
    }
`;

export const ModalFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 42px;
`;
export const ModalTittle = styled.h1`
    margin-bottom: 30px;
    color: ${props => props.theme.colors.textTittleModal};
    font-size: 18px;
    font-weight: 700;
`;
export const ModalLabel = styled.label`
    color: ${props => props.theme.colors.textLabelModal};
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
    color: ${props => props.theme.colors.inputTextTask};
    background-color: ${props => props.theme.colors.inputTask};
    border-radius: 8px;
`;
export const ModalTextArea = styled.textarea`
    width: 412px;
    height: 68px;
    margin-bottom: 30px;
    padding: 10px;
    background-color: ${props => props.theme.colors.inputTask};
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
    border: 2px solid ${props => props.theme.colors.borderButtonCancel};
    background-color:${props => props.theme.colors.bgModal};
    color: ${props => props.theme.colors.textButtonCancel};
    border-radius: 8px;
    font-size: 14px;
    font-weight: 800;
`;
