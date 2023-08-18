import React from 'react';
import { 
    Container,  
    TasksComplete,
    TittleTasksComplete, 
    Cards, 
    TasksToDoCard,
    ButtonCheck, 
    TaskContainer,
    TittleTask, 
    DescriptionTask, 
    ButtonEditTask, 
    ButtonDeleteTask 
} from './styles';
import Scores from "./Scores";
import{ MyTasks} from './MyTasks';

export default function Tasks() {
    return ( 
        <Container>
            <Scores/>

            <MyTasks/>

            <TasksComplete>
                <TittleTasksComplete>Concluídas:</TittleTasksComplete>
                <Cards>

                    <TasksToDoCard>
                        <ButtonCheck/>
                        <TaskContainer>
                            <TittleTask>Tarefa 1</TittleTask>
                            <DescriptionTask>Lorem Ipsum that lorem.</DescriptionTask>
                        </TaskContainer>
                        <ButtonEditTask/>
                        <ButtonDeleteTask/>
                    </TasksToDoCard>

                </Cards>
            </TasksComplete>

        </Container>
     );
};