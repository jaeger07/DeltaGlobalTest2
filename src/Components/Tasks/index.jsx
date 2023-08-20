import React, {useState} from 'react';
import Scores from "./Scores";
import Modal from './Modal';
import CardTask from './CardTask';

import {  
    Container,
    ContainerTasks,
    TasksToDo, 
    TasksComplete,
    ButtonAddTask,
    IconPlus,
    TittleTasksToDo, 
   } from './styles'


   import plus from "../../Assets/Button/plus.svg"
   

export default function Tasks() {

    const [tasks,setTasks] = useState([{
        "id": 3,
        "tittle": "Task tittle",
        "description": "",
        "completed": false
        },
    ]);

    const addTask = (tittle, description) => {

        const newTasks = [...tasks, {
            id: Math.floor(Math.random() * 10000),
            tittle,
            description,
            completed : false,

            },
        ];
        setTasks(newTasks)
    };

    const removeTask =(id) => {
        const newTasks = [...tasks]
        const filteredTasks = newTasks.filter(task =>
             task.id !== id ? task : null
             );
        setTasks(filteredTasks);
    }

    const completeTask = (id) => {
        const newTasks = [...tasks]
        newTasks.map((task) => task.id === id ? task.completed = !task.completed : task);
        setTasks(newTasks);
    }

    const tasksCompleted = tasks.filter(task => task.completed === true ? task : null )
    const tasksToDo = tasks.filter(task => task.completed === false ? task : null )

    return ( 
        <Container>
            <Scores/>
            <ContainerTasks>

                <ButtonAddTask onClick={() => {}}>
                <IconPlus src={plus}/> Adicionar Tarefa
                </ButtonAddTask>

                <TasksToDo>
                    <TittleTasksToDo>Suas Tarefas:</TittleTasksToDo>
                    {
                    tasksToDo.map((task) => 
                        <CardTask key={task.id} task={task} completeTask={completeTask} removeTask={removeTask} />
                    
                    )}
                </TasksToDo>

                <TasksComplete>
                <TittleTasksToDo>Concluídas:</TittleTasksToDo>

                {tasksCompleted.map((task) =>
                    <CardTask key={task.id}  task={task} completeTask={completeTask} removeTask={removeTask}/>
                )}

                </TasksComplete>

                 {/* <Modal addTask={addTask} />   */}

                </ContainerTasks>
        </Container>
     );
};