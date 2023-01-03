// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CompletedTask from './app/component/addtask';
import ToDoList from './app/component/addtask';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
     {/* <AddTaskForm /> */}
     
      {/* </header> */}
      <ToDoList />
      {/* <CompletedTask /> */}
    </div>
  );
}

export default App;
