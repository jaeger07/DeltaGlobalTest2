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

const Modal = ({ addTask }) => {

  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!tittle) return;
    addTask(tittle, description);
    setTittle("");
    setDescription("");
  }
  return (
    
    <ModalContainer>
    <ModalForm onSubmit={handleSubmit} >
      
      <ModalButtonClose src={buttonClose} onClick={() => {}}/>
      <ModalFormContainer>
        <ModalTittle>Adicionar Tarefa</ModalTittle>
        <ModalLabel>Nome da tarefa:</ModalLabel>
        <ModalInput 
        type="text" 
        tittle= {tittle}
        value={tittle}
        onChange={(e) => setTittle(e.target.value)} />
        <ModalLabel>Descrição da tarefa:</ModalLabel>
        <ModalTextArea 
          name="description" 
          description= {description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></ModalTextArea>     

        <ModalContainerButton>
          <ModalButtonCancel
              onClick={() => {}}>Cancelar
          </ModalButtonCancel>

          <ButtonAddTask type="submit" >
            <IconPlus src={plus}/>Adicionar Tarefa
          </ButtonAddTask>
        </ModalContainerButton>
      </ModalFormContainer>
    </ModalForm>
    <ModalExit onClick={() => {}}/>

  </ModalContainer>
  )
}

export default Modal