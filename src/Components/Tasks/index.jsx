import React, { Component } from 'react';
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


    export default class Tasks extends Component{

        constructor(props){
          super(props);
      
          this.state = {
            id: 0,
            tittle: '',
            description: '',
            completed: false,
            tasks : [],
            modalAberta: false      
          };
      
         
          
        }
        componentDidMount() {
          this.reloadTasks();
        }
    


        reloadTasks = () => {
            fetch('http://localhost:3030/tasks')
            .then(res => res.json())
            .then(data => this.setState({ tasks: data }));
        }
      
        loadTask = (id) => {
          fetch('http://localhost:3030/tasks/' + id)
            .then(res => res.json())
            .then(data => this.setState(
            {
              id: data.id,
              tittle: data.tittle,
              description: data.description
            }));
        }
            
        createTask = (task) => {
          fetch("http://localhost:3030/tasks", { method: 'POST' ,
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify(task)      
          }).then((res) => {
            if(res.ok){
              this.reloadTasks();
              this.fecharModal();
            } else {
              alert(JSON.stringify(res));
            }
          }).catch(console.log);
        }
      
        updateTask = (task) => {
          fetch("http://localhost:3030/tasks/"+ task.id, { method: 'PUT' ,
              headers : {'Content-Type':'application/json'},
              body: JSON.stringify(task)      
          }).then((res) => {
              if(res.ok){
                  this.reloadTasks();
                  this.fecharModal();
              }else{
                alert(JSON.stringify(res));
              }
          }
          )
        }
      
        deleteTask = (id) => {
            fetch("http://localhost:3030/tasks/"+id, { method: 'DELETE'})
            .then(res => {
                if(res.ok){
                    this.reloadTasks();
                }
            }
            )
        }
        editMyTasks = (id) => {
            fetch("http://localhost:3030/tasks/"+id, { method: 'GET'})
            .then(res => res.json())
            .then(tasks => {this.setState({ 
                id: tasks.id,
                tittle: tasks.tittle,
                description: tasks.description
              })});
        }
          
        updateSetStateTittle = (e) => {
          this.setState({
            tittle: e.target.value
          });
        }
      
        updateSetStateDescription = (e) => {
          this.setState({
            description: e.target.value
          });
        }
      
        abrirModalInserir = () => {
          this.setState({
            modalAberta: true
          })
        }
        
        abrirModalAtualizar = (id) => {
          this.setState({
            id: id,
            modalAberta: true
          });
      
          this.loadTask(id);
        }
        
        fecharModal = () => {
          this.setState({
            id: 0,
            tittle: "",
            description: "",
            modalAberta: false
          })
        }
        
        submitTask = (e) => {
          e.preventDefault();
          const task = {
            id: this.state.id,
            tittle: this.state.tittle,
            description: this.state.description,
            completed: false
          };
          if(this.state.id == 0){
                    this.createTask(task);
            }else{
                    this.updateTask(task);
            }
        }


        completeTask = (task) => {
          const Task = { completed: !task.completed};

          fetch("http://localhost:3030/tasks/"+ task.id, { method: 'PATCH' ,
          headers : {'Content-Type':'application/json'},
          body: JSON.stringify(Task)      
      }).then((res) => {
              this.reloadTasks();
        })
    }

      

        renderModal = () => {
          if(this.state.modalAberta){
          return (

            <Modal 
            submitTask={this.submitTask} 
            fecharModal={this.fecharModal}
            tittle={this.state.tittle}
            setTittle={this.updateSetStateTittle}
            description={this.state.description}
            setDescription={this.updateSetStateDescription}
            />
            );
        }}
        

render(){
    return ( 
        <Container>
            <Scores tasks={this.state.tasks}/>
            <ContainerTasks>

                <ButtonAddTask onClick={this.abrirModalInserir}>
                <IconPlus src={plus}/> Adicionar Tarefa
                </ButtonAddTask>

                <TasksToDo>
                    <TittleTasksToDo>Suas Tarefas:</TittleTasksToDo>
                    {
                        this.state.tasks.filter(task => task.completed === false ? task : null ).map((task) => 
                        <CardTask 
                        key={task.id} 
                        task={task} 
                        editTask={this.abrirModalAtualizar} 
                        deleteTask={this.deleteTask}
                        completeTask={this.completeTask}
                        />
                    
                    )}
                </TasksToDo>

                <TasksComplete>
                <TittleTasksToDo>Concluídas:</TittleTasksToDo>

                {this.state.tasks.filter(task => task.completed === true ? task : null ).map((task) =>
                    <CardTask 
                    key={task.id}  
                    task={task} 
                    editTask={this.abrirModalAtualizar} 
                    deleteTask={this.deleteTask}
                    completeTask={this.completeTask}
                    />
                )}

                </TasksComplete>

                {this.renderModal()}

                </ContainerTasks>
        </Container>
     );
    };
    }