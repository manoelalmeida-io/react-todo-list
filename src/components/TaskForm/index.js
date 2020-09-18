import React, { useContext, useState } from 'react';
import { TasksContext } from '../../TasksContext';

// import { Container } from './styles';

import { api } from '../../services/api';

function TaskForm() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [title, setTitle] = useState('');

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

  return (
    <>
      <button>Add</button>
      <div>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={() => add(title)}>salvar</button>
      </div>
    </>
  );
}

export default TaskForm;