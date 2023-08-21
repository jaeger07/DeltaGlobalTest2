import React, { Component} from 'react';
import {  
  Container,
  TasksToDo, 
  TasksComplete,
  ButtonAddTask,
  IconPlus,
  TittleTasksToDo, 
  Cards, 
  TasksToDoCard,
  ButtonCheck,  
  TaskContainer,
  TittleTask, 
  DescriptionTask, 
  ButtonHandleTask, 

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

 import TaskZero from './TaskZero'

import plus from "../../../Assets/Button/plus.svg"
import buttonClose from "../../../Assets/Button/buttonClose.svg"
import buttonEdit from "../../../Assets/Button/buttonEdit.svg"
import buttonDelete from "../../../Assets/Button/buttonDelete.svg"


export class MyTasks extends Component{

  constructor(props){
    super(props);

    this.state = {
      id: 0,
      tittle: '',
      description: '',
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
      console.log(this.tasksCompleted)
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


  renderModal = () => {
    if(this.state.modalAberta){
    return (

      <ModalContainer>
      <ModalForm onSubmit={this.submitTask} >
        
        <ModalButtonClose src={buttonClose} onClick={this.fecharModal}/>
        <ModalFormContainer>
          <ModalTittle>Cadastrar Tarefa</ModalTittle>
          <ModalLabel>Nome da tarefa:</ModalLabel>
          <ModalInput type="text" value={this.state.tittle} onChange={this.updateSetStateTittle}/>
          <ModalLabel>Descrição da tarefa:</ModalLabel>
          <ModalTextArea 
            name="description" 
            value={this.state.description}
            onChange={this.updateSetStateDescription} 
          ></ModalTextArea>     

          <ModalContainerButton>
            <ModalButtonCancel
                onClick={this.fecharModal}>Cancelar
            </ModalButtonCancel>

            <ButtonAddTask  type="submit" >
              <IconPlus src={plus}/> Adicionar Tarefa
            </ButtonAddTask>
          </ModalContainerButton>
        </ModalFormContainer>
      </ModalForm>
      <ModalExit onClick={this.fecharModal}/>

    </ModalContainer>
    );
  }}
  
    

render() {
  return (
    <Container>

    <ButtonAddTask onClick={this.abrirModalInserir}>
      <IconPlus src={plus}/> Adicionar Tarefa
    </ButtonAddTask>
 
    <TasksToDo>
        <TittleTasksToDo>Suas Tarefas:</TittleTasksToDo>
        <TaskZero taskZero={this.state.tasks}/>
        {this.state.tasks.map((task) => 
          <Cards>
            <TasksToDoCard>
              <ButtonCheck />
              <TaskContainer>
                  <TittleTask>{task.tittle}</TittleTask>
                  <DescriptionTask>{task.description}</DescriptionTask>
              </TaskContainer>
              <ButtonHandleTask onClick={() => this.abrirModalAtualizar(task.id)} src={buttonEdit}/>
              <ButtonHandleTask onClick={() => this.deleteTask(task.id)} src={buttonDelete}/>
            </TasksToDoCard>
          </Cards>
        
        )}
    </TasksToDo>

    <TasksComplete>
      <TittleTasksToDo>Concluídas:</TittleTasksToDo>
      {this.state.tasks.filter(task => task.completed === true ? task : null ).map((task) =>
          <Cards>
            <TasksToDoCard>
              <ButtonCheck />
              <TaskContainer>
                  <TittleTask>{task.tittle}</TittleTask>
                  <DescriptionTask>{task.description}</DescriptionTask>
              </TaskContainer>
              <ButtonHandleTask onClick={() => this.abrirModalAtualizar(task.id)} src={buttonEdit}/>
              <ButtonHandleTask onClick={() => this.deleteTask(task.id)} src={buttonDelete}/>
            </TasksToDoCard>
          </Cards>
               
        )}
    </TasksComplete>

    {this.renderModal()}

    </Container>
  );
}
}
    

   