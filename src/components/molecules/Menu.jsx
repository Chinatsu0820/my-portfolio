import React from 'react';
import Button from '../atoms/Button';

// MEMO : just test for the button
const Menu = () => {
  return (
    <div>
      <Button>Top</Button>
      <Button className="bg-red-500">His</Button>
      <Button className="bg-green-500">Can</Button>
      <Button className="bg-yellow-500">?</Button>
    </div>
  );
};

export default Menu;