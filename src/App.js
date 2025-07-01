import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import './App.css';

function App() {
  return (
      <div className="app-container">
        <header>
          <h1>Lista de Tarefas</h1>
        </header>
        <main>
          <TaskInput />
          <FilterButtons />
          <TaskList />
        </main>
        <footer>
          <p>Desenvolvido como um projeto de estudo.</p>
        </footer>
      </div>
  );
}

export default App;