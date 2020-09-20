import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FaPlus } from 'react-icons/fa';
import { TasksContext } from '../../TasksContext';

import { Container, FloatingButton } from './styles';

import { api } from '../../services/api';

function TaskForm() {
  const { tasks, setTasks } = useContext(TasksContext);
  const { register, handleSubmit } = useForm();

  const [show, setShow] = useState(false);

  function add(data) {
    const newTask = {
      id: null,
      ...data,
      completed: false
    };

    setTasks([...tasks, { ...newTask, id: (tasks.length > 0 ? (tasks[tasks.length - 1].id + 1) : 1) }]);
    api.post('/tasks', newTask);
  }

  function floatingButtonOnClick() {
    setShow(!show);
  }

  return (
    <Container>
      <FloatingButton onClick={floatingButtonOnClick} show={show}>
        <FaPlus color="#fff" size={14} />
      </FloatingButton>
      {show &&
        <form onSubmit={handleSubmit(add)}>
          <label>Title</label>
          <input name="title" ref={register} />

          <label>Description</label>
          <textarea name="description" ref={register} />

          <button type="submit">Add</button>
        </form>
      }
    </Container>
  );
}

export default TaskForm;