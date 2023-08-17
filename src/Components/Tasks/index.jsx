import React from 'react';
import { 
    Container, 
    TasksToDo, 
    TittleTasksToDo, 
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
import ButtonAddTask from './ButtonAddTask';

export default function Tasks() {
    return ( 
        <Container>
            <Scores/>
            <ButtonAddTask/>

            <TasksToDo>
                <TittleTasksToDo>Suas Tarefas:</TittleTasksToDo>
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
            </TasksToDo>

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