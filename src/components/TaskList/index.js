import React, { useContext } from 'react';
import { TasksContext } from '../../TasksContext';

import { ContainerTaskList } from './styles';

import { api } from '../../services/api';

function TaskList({ filter }) {
  const { tasks, setTasks } = useContext(TasksContext);

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

  return (
    <main>
      {filterTasks().map(task => (
        <ContainerTaskList key={task.id}>
          <div className="check_title">
            <input type="checkbox" checked={task.completed} onChange={e => updateCompletion(task, e.target.checked)}/>
            <span>{task.title}</span>
          </div>
          <button onClick={() => deleteTask(task)}>X</button>
        </ContainerTaskList>
      ))}
    </main>
  );
}

export default TaskList;