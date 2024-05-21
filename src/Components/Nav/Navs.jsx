import React from 'react';
import { Link } from 'react-router-dom';


function Navs() {
  return (
    <nav className='Nav'>
      <div className="row">
      <div className='col-lg-12 col-md-12 col-sm-12 col-12 col-xxl-12 col-xl-12'>
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
</div>
      </div>
      
    
    </nav>
  );
}

export default Navs;
