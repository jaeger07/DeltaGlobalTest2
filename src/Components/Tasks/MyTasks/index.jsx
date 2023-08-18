import React, { Component} from 'react';
import {  
  Container,
  TasksToDo, 
  ButtonAddTask,
  IconPlus,
  TittleTasksToDo, 
  Cards, 
  TasksToDoCard,
  ButtonCheck, 
  TaskContainer,
  TittleTask, 
  DescriptionTask, 
  ButtonEditTask, 
  ButtonDeleteTask,

  ModalContainer,
  ModalForm,
  ModalTittle,
  ModalLabel,
  ModalInput,
  ModalTextArea,
  ModalButtonCancel,
  ModalExit
 } from './styles'

import plus from "../../../Assets/Button/plus.svg"

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

        this.reloadTasks = this.reloadTasks.bind(this);
        this.loadTask = this.loadTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.renderTabela = this.renderTabela.bind(this);
        this.abrirModalInserir = this.abrirModalInserir.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
        this.updateSetStateTittle = this.updateSetStateTittle.bind(this);
        this.updateSetStateDescription = this.updateSetStateDescription.bind(this);
    
    }
    componentDidMount() {
        this.reloadTasks();
      }
    

    reloadTasks = () => {
        fetch('http://localhost:3030/tasks/')
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
        fetch("http://localhost:3030/tasks/", { method: 'POST' ,
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
      

    ///
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
          nome: "",
          email: "",
          modalAberta: false
        })
      }
    
    submitTask = () => {
      const task = {
        id: this.state.id,
        tittle: this.state.tittle,
        description: this.state.description
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
          <ModalForm id="modalForm">
            <ModalTittle>Cadastrar Tarefa</ModalTittle>
            <ModalLabel>Nome da tarefa:</ModalLabel>
            <ModalInput type="text" value={this.state.tittle} onChange={this.updateSetStateTittle}/>
            <ModalLabel>Descrição da tarefa</ModalLabel>
            <ModalTextArea 
                name="description" 
                value={this.state.description}
                onChange={this.updateSetStateDescription}
                cols="70" 
                rows="4"  
                style={{resize: 'none'}}
            ></ModalTextArea>
            <div>
              <ModalButtonCancel
                  onClick={this.fecharModal}>Cancelar
              </ModalButtonCancel>

              <ButtonAddTask form="modalForm" type="submit" onClick={this.submitTask}>
                <IconPlus src={plus}/> Adicionar Tarefa
              </ButtonAddTask>
            </div>
          </ModalForm>
          <ModalExit onClick={this.fecharModal}/>

        </ModalContainer>


        );
      }
      }
    
      renderTabela = () => {
        return (
          <TasksToDo>
                <TittleTasksToDo>Suas Tarefas:</TittleTasksToDo>
                {this.state.tasks.map((task) =>
                    <Cards>
                        <TasksToDoCard>
                            <ButtonCheck/>
                            <TaskContainer>
                                <TittleTask>{task.tittle}</TittleTask>
                                <DescriptionTask>{task.description}</DescriptionTask>
                            </TaskContainer>
                            <ButtonEditTask onClick={() => this.abrirModalAtualizar(task.id)}>Editar</ButtonEditTask>
                            <ButtonDeleteTask onClick={() => this.deleteTask(task.id)}> Excluir</ButtonDeleteTask>
                        </TasksToDoCard>
                    </Cards>
                )}
                </TasksToDo>
        );
      }
    
      render() {
        return (
          <Container>

            <ButtonAddTask onClick={this.abrirModalInserir}>
              <IconPlus src={plus}/> Adicionar Tarefa
            </ButtonAddTask>

            {this.renderTabela()}
            {this.renderModal()}
          </Container>
        );
      }
    }
    

   