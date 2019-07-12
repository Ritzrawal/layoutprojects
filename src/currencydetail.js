import React, { Component } from 'react'

class Todo extends Component {
  constructor() {
    super();
    this.state = {      
      todos: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'],
      currentPage: 1,
      todosPerPage: 3 ,
      fotos: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  componentDidMount() {
    fetch("http://localhost:8080/scrape") 
     .then(response =>  response.json())
     .then(resData => {
        this.setState({ fotos: resData.currency.name }); //this is an asynchronous function
     })
   }
  //  componentDidMount() {
  //     //make call to database and set the db data to your state.
  //     fetch('http://yourapi.com/todods')
  //   .then(function (response) {
  //     this.setState({fotos: response.data.interiores[0].fotos})
  //   })
  //   .catch(function (error) {
  //     console.log('error:', error);
  //   });   
  // }
  render() {
    const  value=this.state.person.map((hello,index)=>{
      return{hello}
    })
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = value.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        {/* Hello World
        hello World */}
        <ul>
          {this.state.fotos? this.state.fotos: 'nothing to display' }
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default Todo;