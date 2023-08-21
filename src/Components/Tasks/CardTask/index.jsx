import React from 'react'

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

  
  return (
    
    <TasksToDoCard >
    <ButtonCheck onClick={() => completeTask(task)} />
    <TaskContainer>
        <TittleTask>{task.tittle}</TittleTask>
        <DescriptionTask>{task.description}</DescriptionTask>
    </TaskContainer>
    <ButtonHandleTask onClick={() => editTask(task.id)} src={task === 'light' ? buttonEditLight : buttonEditDark}/>
    <ButtonHandleTask onClick={() => deleteTask(task.id)} src={task === 'light' ? buttonDeleteLight : buttonDeleteDark}/>
    </TasksToDoCard>
    
  )
}

export default CardTask