import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const todos = [
    {rowNumber:1,rowDescription:'Get Bread',rowAssigned:'Roshan'},
    {rowNumber:2,rowDescription:'Get Milk',rowAssigned:'Akash'},
    {rowNumber:3,rowDescription:'Feed Puppy',rowAssigned:'Rakesh'}
  ];
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          <p>Your Todo's</p>
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
