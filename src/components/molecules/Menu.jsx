import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-button'>
      <Link to='/'>
        <Button>Top</Button>
      </Link>
      <Link to='/history'>
        <Button>His</Button>
      </Link>
      <Link to='/can'>
        <Button>Can</Button>
      </Link>
      <Link to='/contact'>
        <Button>?</Button>
      </Link>
    </div>
  );
};

export default Menu;