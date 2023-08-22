import React from 'react'

import {  
    ButtonAddTask,
    IconPlus,
    ModalContainer,
    ModalForm,
    ModalButtonClose,
    ModalFormContainer,
    ModalTittle,
    ModalLabel,
    ModalInput,
    ModalTextArea,
    ModalContainerButton,
    ModalButtonCancel,
    ModalExit
   } from './styles'

   
   import buttonClose from "../../../Assets/Button/buttonClose.svg"
   import plus from "../../../Assets/Button/plus.svg"

const Modal = ({ tittleModal, textButton, submitTask, closeModal, tittle, setTittle, description, setDescription }) => {
  
  return (
    
    <ModalContainer>
            <ModalForm onSubmit={submitTask} >
              
              <ModalButtonClose src={buttonClose} onClick={closeModal}/>
              <ModalFormContainer>
                <ModalTittle>{tittleModal}</ModalTittle>
                <ModalLabel>Nome da tarefa:</ModalLabel>
                <ModalInput type="text" value={tittle} onChange={setTittle}/>
                <ModalLabel>Descrição da tarefa:</ModalLabel>
                <ModalTextArea 
                  name="description" 
                  value={description}
                  onChange={setDescription} 
                ></ModalTextArea>     
      
                <ModalContainerButton>
                  <ModalButtonCancel
                      onClick={closeModal}>Cancelar
                  </ModalButtonCancel>
      
                  <ButtonAddTask  type="submit" >
                    <IconPlus src={plus}/> {textButton}
                  </ButtonAddTask>
                </ModalContainerButton>
              </ModalFormContainer>
            </ModalForm>
            <ModalExit onClick={closeModal}/>
      
          </ModalContainer>
          
  )
}

export default Modal