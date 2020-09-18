import React from 'react';

// import { Container } from './styles';

function Filter({ filterCallback }) {
  return (
    <div>
      <ul>
        <li><button onClick={() => filterCallback('all')}>All</button></li>
        <li><button onClick={() => filterCallback('in_progress')}>In progress</button></li>
        <li><button onClick={() => filterCallback('completed')}>Completed</button></li>
      </ul>
    </div>
  );
}

export default Filter;