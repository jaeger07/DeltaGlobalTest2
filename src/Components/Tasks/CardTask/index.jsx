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
    //import buttonEditDark from "../../Assets/Button/buttonEditDark.svg"
    //import buttonDeleteDark from "../../Assets/Button/buttonDeleteDark.svg"

const CardTask = ({task, removeTask, completeTask}) => {
  return (
    
        <TasksToDoCard >
        <ButtonCheck onClick={() => completeTask(task.id)} />
        <TaskContainer>
            <TittleTask>{task.tittle}</TittleTask>
            <DescriptionTask>{task.description}</DescriptionTask>
        </TaskContainer>
        <ButtonHandleTask onClick={() => {}} src={buttonEditLight}/>
        <ButtonHandleTask onClick={() => removeTask(task.id)} src={buttonDeleteLight}/>
        </TasksToDoCard>
    
  )
}

export default CardTask