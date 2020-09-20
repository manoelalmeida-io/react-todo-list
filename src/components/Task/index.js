import React, { useContext, useState } from 'react';
import { FaAngleRight, FaPen, FaTrashAlt } from 'react-icons/fa';
import { TasksContext } from '../../TasksContext';

import { api } from '../../services/api';

import { ContainerTask, Header, Body } from './styles';

function Task({ task }) {
  const { tasks, setTasks } = useContext(TasksContext);
  const [show, setShow] = useState(false);

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

  function toggle() {
    setShow(!show);
  }

  return (
    <ContainerTask key={task.id}>
      <Header show={show}>
        <div className="check_title">
          <input type="checkbox" checked={task.completed} onChange={e => updateCompletion(task, e.target.checked)}/>
          <span>{task.title}</span>
        </div>
        <button onClick={() => toggle()}>
          <FaAngleRight/>
        </button>
      </Header>
      {show && (
        <Body>
          <span>{task.description}</span>
          <div>
            <button><FaPen size={14} color="#9e9e9e" /></button>
            <button onClick={() => deleteTask(task)}><FaTrashAlt size={14} color="#9e9e9e" /></button>
          </div>
        </Body>
      )}
    </ContainerTask>
  );
}

export default Task;