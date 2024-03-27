import React from 'react';
import Button from '../atoms/Button';

// MEMO : just test for the button
const Menu = () => {
  return (
    <div>
      <Button>デフォルトボタン</Button>
      <Button className="bg-red-500">赤いボタン</Button>
      <Button className="bg-green-500">緑のボタン</Button>
    </div>
  );
};

export default Menu;