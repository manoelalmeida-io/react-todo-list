import React, { useContext } from 'react';
import { TasksContext } from '../../TasksContext';

import Task from '../Task';

function TaskList({ filter }) {
  const { tasks } = useContext(TasksContext);

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
        <Task key={task.id} task={task} />
      ))}
    </main>
  );
}

export default TaskList;