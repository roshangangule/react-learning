import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState([
    {rowNumber:1,rowDescription:'Get Bread',rowAssigned:'Roshan'},
    {rowNumber:2,rowDescription:'Get Milk',rowAssigned:'Akash'},
    {rowNumber:3,rowDescription:'Feed Puppy',rowAssigned:'Rakesh'},
    {rowNumber:4,rowDescription:'Make a cake',rowAssigned:'Akash'},
    {rowNumber:5,rowDescription:'Get Toasts',rowAssigned:'Rakesh'}
  ]);

  const addTodo = (description,assigned) => {
    let rowNo = 0;
    if(todos.length > 0) {
      rowNo = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNo = 1;
    }
    const newTodo = {
      rowNumber: rowNo,
      rowDescription: description,
      rowAssigned: assigned
    }
      setTodos(todos => [...todos, newTodo]);
    console.log(todos);
  }

  const deleteTodo =  (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  const [submitAddTodo, setSubmitAddTodo] = useState(false);

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          <p>Your Todo's</p>
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo = {deleteTodo}/>
          <button 
            className='btn btn-primary' 
            onClick={() => setSubmitAddTodo(!submitAddTodo)}
          >{!submitAddTodo?'New Todo':'Close Add Todo'}</button>
          {submitAddTodo && <NewTodoForm addTodo={addTodo}></NewTodoForm>}
        </div>
      </div>
    </div>
  );
}

export default App;
