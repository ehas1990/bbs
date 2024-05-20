import React from 'react';
import { Link } from 'react-router-dom';


function Navs() {
  return (
    <nav className='Nav'>
      <ul className='Nav-list'>
        <li className='Nav-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='Nav-item'>
          <Link to='/About'>About</Link>
        </li>
        <li className='Nav-item'>
          <Link to='/Services'>Services</Link>
        </li>
        <li className='Nav-item'>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navs;
