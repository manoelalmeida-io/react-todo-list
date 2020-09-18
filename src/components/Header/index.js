import React from 'react';

// import { Container } from './styles';

function Header({ tasks }) {
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