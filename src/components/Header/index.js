import React, { useContext } from 'react';
import { TasksContext } from '../../TasksContext';

// import { Container } from './styles';

function Header() {
  const { tasks } = useContext(TasksContext);

  return (
    <header>
      <div>
        <div>{tasks.filter(task => task.completed).length}</div>
        <div>
          <div>Tasks</div>
          <div>/{tasks.length}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;