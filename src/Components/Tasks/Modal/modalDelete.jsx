import React from 'react'

import {  
    ButtonDeleteTask,
    IconDelete,
    ModalContainer,
    ModalForm,
    ModalButtonClose,
    ModalFormContainer,
    ModalTittle,
    ModalTextAlertDelete,
    ModalContainerButton,
    ModalButtonCancel,
    ModalExit
   } from './styles'

   
   import buttonClose from "../../../Assets/Button/buttonClose.svg"
   import iconDelete from "../../../Assets/Button/buttonDeleteDark.svg"

const ModalDelete = ({ closeModal , deleteTask }) => {
  
  return (
    
    <ModalContainer>
            <ModalForm onSubmit={deleteTask} >
              
              <ModalButtonClose src={buttonClose} onClick={closeModal}/>
              <ModalFormContainer>
                <ModalTittle>Excluir Tarefa</ModalTittle>

                <ModalTextAlertDelete>
                    Tem certeza que deseja deletar essa tarefa?  
                    </ModalTextAlertDelete>
      
                <ModalContainerButton>
                  <ModalButtonCancel
                      onClick={closeModal}>Cancelar
                  </ModalButtonCancel>
      
                  <ButtonDeleteTask  type="submit" >
                    <IconDelete src={iconDelete}/> Delete
                  </ButtonDeleteTask>
                </ModalContainerButton>
              </ModalFormContainer>
            </ModalForm>
            <ModalExit onClick={closeModal}/>
      
          </ModalContainer>
          
  )
}

export default ModalDelete