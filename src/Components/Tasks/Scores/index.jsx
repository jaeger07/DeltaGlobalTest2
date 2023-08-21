import React from 'react';
import { Container, Card } from './styles'


export default function Scores({tasks}) {
 
    
    function tasksCompleted(tasks) {
        var counter = 0;
        for (const task of tasks) {
          if (task.completed == true) counter += 1;
        }
        return counter;
      }
    function tasksTotal(tasks) {
        var counter = 0;
        for (const task of tasks) {
           counter += 1;
        }
        return counter;
      }
      function tasksToDo(tasks) {
        var counter = 0;
        for (const task of tasks) {
          if (task.completed === false) counter += 1;
        }
        return counter;
      }

    return ( 
        <Container>
            <Card>
                <h1>{tasksTotal(tasks)}</h1>
                <span>Todas&nbsp;as&nbsp;Tarefas</span>
            </Card>
            <Card>
                <h1>{tasksCompleted(tasks)}</h1>
                <span>Tarefas&nbsp;concluídas</span>
            </Card>
            <Card>
                <h1>{tasksToDo(tasks)}</h1>
                <span>Não&nbsp;concluídas</span>
            </Card>
        </Container>
     );
}
