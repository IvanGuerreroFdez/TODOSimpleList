import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import { useState } from 'react';
import List from './components/List';

function App() {
  const [tasks, setTask] = useState([]);

  const handleTaskSent= (task) => {
    setTask([...tasks, task]);
  }
  return (
    <div className="App">

      <Formulario tareasimple = {handleTaskSent}/>
      <List tasklist = {tasks}/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
