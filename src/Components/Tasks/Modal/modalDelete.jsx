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

const ModalDelete = ({ fecharModal , deleteTask }) => {
  
  return (
    
    <ModalContainer>
            <ModalForm onSubmit={deleteTask} >
              
              <ModalButtonClose src={buttonClose} onClick={fecharModal}/>
              <ModalFormContainer>
                <ModalTittle>Cadastrar Tarefa</ModalTittle>

                <ModalTextAlertDelete>
                    Tem certeza que deseja deletar essa tarefa?  
                    </ModalTextAlertDelete>
      
                <ModalContainerButton>
                  <ModalButtonCancel
                      onClick={fecharModal}>Cancelar
                  </ModalButtonCancel>
      
                  <ButtonDeleteTask  type="submit" >
                    <IconDelete src={iconDelete}/> Delete
                  </ButtonDeleteTask>
                </ModalContainerButton>
              </ModalFormContainer>
            </ModalForm>
            <ModalExit onClick={fecharModal}/>
      
          </ModalContainer>
          
  )
}

export default ModalDelete