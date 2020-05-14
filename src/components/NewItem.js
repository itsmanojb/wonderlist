import React, { useContext, useState } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const NewItem = () => {
  const { addItem } = useContext(WonderItemContext);
  const [itemName, setItemName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);
    setItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        placeholder="Item name"
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItem;
