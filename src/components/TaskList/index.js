import React from 'react';

// import { Container } from './styles';

function TaskList({ tasks, updateCallback, deleteCallback }) {
  return (
    <main>
      {tasks.map(task => (
        <div key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={e => updateCallback(task, e.target.checked)}/>
          <span>{task.title}</span>
          <button onClick={() => deleteCallback(task)}>X</button>
        </div>
      ))}
    </main>
  );
}

export default TaskList;