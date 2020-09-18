import React, { useState } from 'react';

// import { Container } from './styles';

function TaskForm({ addCallback }) {
  const [title, setTitle] = useState('');

  return (
    <>
      <button>Add</button>
      <div>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={() => addCallback(title)}>salvar</button>
      </div>
    </>
  );
}

export default TaskForm;