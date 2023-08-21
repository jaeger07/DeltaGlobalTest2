import React, { useState } from 'react'

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

const Modal = ({submitTask, fecharModal, tittle, setTittle, description, setDescription }) => {
  
  return (
    
    <ModalContainer>
            <ModalForm onSubmit={submitTask} >
              
              <ModalButtonClose src={buttonClose} onClick={fecharModal}/>
              <ModalFormContainer>
                <ModalTittle>Cadastrar Tarefa</ModalTittle>
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
                      onClick={fecharModal}>Cancelar
                  </ModalButtonCancel>
      
                  <ButtonAddTask  type="submit" >
                    <IconPlus src={plus}/> Adicionar Tarefa
                  </ButtonAddTask>
                </ModalContainerButton>
              </ModalFormContainer>
            </ModalForm>
            <ModalExit onClick={fecharModal}/>
      
          </ModalContainer>
          
  )
}

export default Modal