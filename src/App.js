import React, {useEffect, useState} from 'react';

import { api } from './services/api';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

function App() {
  const [filter, setFilter] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks').then(response => {
      setTasks(response.data);
    });
  }, []);

  function filterTasks() {
    switch (filter) {
      case 'in_progress':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }

  function add(title) {
    const newTask = {
      id: null,
      title,
      description: '',
      completed: false
    };

    setTasks([...tasks, { ...newTask, id: (tasks[tasks.length - 1].id + 1) }]);
    api.post('/tasks', newTask);
  }

  function changeFilter(filter) {
    setFilter(filter);
  }

  function updateCompletion(task, completed) {
    const updatedTask = { ...task, completed };
    const updatedTasks = tasks.map(listTask => listTask.id === task.id ? updatedTask : listTask);

    setTasks(updatedTasks);
    api.put(`/tasks/${task.id}`, updatedTask);
  }

  function deleteTask(task) {
    setTasks(tasks.filter(listTask => listTask !== task));
    api.delete(`/tasks/${task.id}`);
  }

  return (
    <div className="App">
      <div>
        <Header tasks={tasks}/>
        <TaskForm addCallback={add} />
        <Filter filterCallback={changeFilter}/>
        <TaskList tasks={filterTasks()} updateCallback={updateCompletion} deleteCallback={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
