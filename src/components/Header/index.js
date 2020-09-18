import React, { useContext } from 'react';
import { TasksContext } from '../../TasksContext';

import { Container } from './styles';

function Header() {
  const { tasks } = useContext(TasksContext);

  return (
    <Container>
      <div>
        <div className="completed">{tasks.filter(task => task.completed).length}</div>
        <div>
          <div className="tasks">Tasks</div>
          <div className="remaining">/{tasks.length}</div>
        </div>
      </div>
    </Container>
  );
}

export default Header;