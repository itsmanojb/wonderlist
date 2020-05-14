import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const Navbar = () => {
  const { items } = useContext(WonderItemContext);
  return (
    <div className="navbar">
      <h1>Wonderlist</h1>
      <p>You have {items.length} items in your list</p>
    </div>
  );
};

export default Navbar;
