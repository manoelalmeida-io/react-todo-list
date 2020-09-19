import React from 'react';
import { FaTasks, FaDotCircle, FaCheck } from 'react-icons/fa';

import { Container } from './styles';

function Filter({ filter, filterCallback }) {
  return (
    <Container>
      <ul>
        <li>
          <button onClick={() => filterCallback('all')}>
            <FaTasks size={18} color={filter === 'all' ? '#7986CB' : '#bdbdbd'}/>
          </button>
        </li>
        <li>
          <button onClick={() => filterCallback('in_progress')}>
            <FaDotCircle size={18} color={filter === 'in_progress' ? '#7986CB' : '#bdbdbd'}/>
          </button>
        </li>
        <li>
          <button onClick={() => filterCallback('completed')}>
            <FaCheck size={18} color={filter === 'completed' ? '#7986CB' : '#bdbdbd'}/>
          </button>
        </li>
      </ul>
    </Container>
  );
}

export default Filter;