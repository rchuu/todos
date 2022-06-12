import React, { useState } from 'react'; // inputting react(one big object), and destructuring of out the object
import './App.css';
import Todo from './components/TodoComponent';

function App() {
  /* below array destructure synax is equivalent to:
const newTodoStateArr = useState(''); //always returns and array with two items in it
const newTodo = newTodoStateArr[0]; //stores 1st item in array
const setNewTodo = newTodoStateArr[1]; //stores 2nd item in array
 */

  const [newTodo, setNewTodo] = useState(''); //empty box is an empty string
  const [todos, setTodos] = useState([]); //empty array

  const handleNewTodoSubmit = (event) => {
    event.preventDefault(); //don't want to refresh page

    if (newTodo.length === 0) {
      return; //if newTodo is empty, don't do anything
    }

    const todoItem = {
      text: newTodo,
      completed: false
    }

    setTodos([...todos, todoItem]); //add new todo to the end of the array
    setNewTodo(""); //clear the input box
  };
  //   setTodoList([...todoList, newToDo]); //adds new todo to the todo list
  //   setNewTodo(''); //clears the input box after submit
  // };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === idx) {
        todo.complete = !todo.complete;
        // To avoid mutating the todo directly, do this:
        // const updatedTodo = { ...todo, complete: !todo.complete};
        // return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="align-items-center">
      <form
        onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}
      >
        <input
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
          type="text"
        />
        <div>
          <button>Add</button>
        </div>
      </form >
      {todos.map((todo, i) => {
        return (
          <TodoComponent
            key={i}
            i={i}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handeleTodoDelete={handleTodoDelete}
          />
        );
      })}
    </div >
  );
}

export default App;