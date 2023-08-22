import React, { Component } from 'react';
import Scores from "./Scores";
import Modal from './Modal';
import ModalDelete from './Modal/modalDelete';
import CardTask from './CardTask';
import CardTaskComplete from './CardTaskComplete';

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


    export default class Tasks extends Component {

        constructor(props){
          super(props);
      
          this.state = {
            id: 0,
            tittle: '',
            description: '',
            completed: false,
            tasks : [],
            modalAberta: false,
            modalEdit: false,
            modalDelete:false,     
          };
      
         
          
        }
        componentDidMount() {
          this.reloadTasks();
        }
    


        reloadTasks = () => {
            fetch('https://json-server-theta-ruby.vercel.app/tasks')
            .then(res => res.json())
            .then(data => this.setState({ tasks: data }));
        }
      
        loadTask = (id) => {
          fetch('https://json-server-theta-ruby.vercel.app/tasks/' + id)
            .then(res => res.json())
            .then(data => this.setState(
            {
              id: data.id,
              tittle: data.tittle,
              description: data.description
            }));
        }
            
        createTask = (task) => {
          fetch("https://json-server-theta-ruby.vercel.app/tasks", { method: 'POST' ,
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify(task)      
          }).then((res) => {
            if(res){
              this.reloadTasks();
              this.closeModal();
            } else {
              alert(JSON.stringify(res));
            }
          }).catch(console.log);
        }
      
        updateTask = (task) => {
          fetch("https://json-server-theta-ruby.vercel.app/tasks/"+ task.id, { method: 'PUT' ,
              headers : {'Content-Type':'application/json'},
              body: JSON.stringify(task)      
          }).then((res) => {
              if(res){
                  this.reloadTasks();
                  this.closeModal();
              }else{
                alert(JSON.stringify(res));
              }
          }
          )
        }
      
        deleteTask = (e) => {
          e.preventDefault();
          const id = this.state.id;

          if(this.state.id !== 0){
            fetch("https://json-server-theta-ruby.vercel.app/tasks/"+id, { method: 'DELETE'})
            .then(res => {
                if(res){
                    this.reloadTasks();
                    this.closeModal();
                }
            }
            )
        }
      }
        editMyTasks = (id) => {
            fetch("https://json-server-theta-ruby.vercel.app/tasks/"+id, { method: 'GET'})
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
      
        openModalCreate = () => {
          this.setState({
            modalAberta: true
          })
        }
        
        openModalEdit = (id) => {
          this.setState({
            id: id,
            modalEdit: true
          });
      
          this.loadTask(id);
        }
        openModalDelete = (id) => {
          this.setState({
            id: id,
            modalDelete: true
          });
      
          this.loadTask(id);
        }
        
        closeModal = () => {
          this.setState({
            id: 0,
            tittle: "",
            description: "",
            modalAberta: false,
            modalEdit: false,
            modalDelete: false
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
          if(this.state.id === 0){
                    this.createTask(task);
            }else{
                    this.updateTask(task);
            }
        }


    completeTask = (task) => {
      const Task = { completed: !task.completed };

      fetch("https://json-server-theta-ruby.vercel.app/tasks/"+ task.id, { method: 'PATCH' ,
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
            tittleModal="Cadastrar Tarefa"
            textButton="Adicionar tarefa"
            submitTask={this.submitTask} 
            closeModal={this.closeModal}
            tittle={this.state.tittle}
            setTittle={this.updateSetStateTittle}
            description={this.state.description}
            setDescription={this.updateSetStateDescription}
            />);
        }
        if(this.state.modalEdit){
          return (
          <Modal 
          tittleModal="Editar Tarefa"
          textButton="Salvar"
          submitTask={this.submitTask} 
          closeModal={this.closeModal}
          tittle={this.state.tittle}
          setTittle={this.updateSetStateTittle}
          description={this.state.description}
          setDescription={this.updateSetStateDescription}
          />);
        }
      }

  renderModalDelete = () => {
    if(this.state.modalDelete){
      return (
        <ModalDelete
        deleteTask={this.deleteTask}
        closeModal={this.closeModal}
        />);
    }
  }
        

render(){
    return ( 
        <Container>
            <Scores tasks={this.state.tasks}/>
            <ContainerTasks>

                <ButtonAddTask onClick={this.openModalCreate}>
                <IconPlus src={plus}/>
                <p>
                Adicionar&nbsp;Tarefa
                </p>
                </ButtonAddTask>

                <TasksToDo>
                    <TittleTasksToDo>Suas Tarefas:</TittleTasksToDo>
                    {
                        this.state.tasks.filter(task => task.completed === false ? task : null ).map((task) => 
                        <CardTask 
                        key={task.id} 
                        task={task} 
                        editTask={this.openModalEdit} 
                        deleteTask={this.openModalDelete}
                        completeTask={this.completeTask}
                        />
                    
                    )}
                </TasksToDo>

                <TasksComplete>
                <TittleTasksToDo>Concluídas:</TittleTasksToDo>

                {this.state.tasks.filter(task => task.completed === true ? task : null ).map((task) =>
                    <CardTaskComplete 
                    key={task.id}  
                    task={task} 
                    editTask={this.openModalEdit} 
                    deleteTask={this.openModalDelete}
                    completeTask={this.completeTask}
                    />
                )}

                </TasksComplete>

                {this.renderModal()}
                {this.renderModalDelete()}

                </ContainerTasks>
        </Container>
     );
    };
    }