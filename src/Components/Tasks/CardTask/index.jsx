import React, { useContext }  from 'react'
import { ThemeContext } from 'styled-components';

import {   
    TasksToDoCard,
    ButtonCheck,  
    TaskContainer,
    TittleTask, 
    DescriptionTask, 
    ButtonHandleTask, 
   } from './styles'

   import buttonEditLight from "../../../Assets/Button/buttonEdit.svg"
   import buttonDeleteLight from "../../../Assets/Button/buttonDelete.svg"
    import buttonEditDark from "../../../Assets/Button/buttonEditDark.svg"
    import buttonDeleteDark from "../../../Assets/Button/buttonDeleteDark.svg"

const CardTask = ({task, editTask, deleteTask, completeTask, }) => {

  const { tittle } = useContext(ThemeContext);  
  
  return (
    
    <TasksToDoCard >
    <ButtonCheck onClick={() => completeTask(task)} />
    <TaskContainer>
        <TittleTask>{task.tittle}</TittleTask>
        <DescriptionTask>{task.description}</DescriptionTask>
    </TaskContainer>
    <ButtonHandleTask onClick={() => editTask(task.id)} src={tittle === 'light' ? buttonEditLight : buttonEditDark}/>
    <ButtonHandleTask onClick={() => deleteTask(task.id)} src={tittle === 'light' ? buttonDeleteLight : buttonDeleteDark}/>
    </TasksToDoCard>
    
  )
}

export default CardTask