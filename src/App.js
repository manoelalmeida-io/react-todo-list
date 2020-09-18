import React, {useEffect, useState} from 'react';

import { api } from './services/api';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import TaskList from './components/TaskList';
import { TasksContext } from './TasksContext';

function App() {
  const [filter, setFilter] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks').then(response => {
      setTasks(response.data);
    });
  }, []);

  function changeFilter(filter) {
    setFilter(filter);
  }

  return (
    <div className="App">
      <TasksContext.Provider value={{ tasks, setTasks }}>
        <div>
          <Header/>
          <TaskForm />
          <Filter filterCallback={changeFilter}/>
          <TaskList filter={filter} />
        </div>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
