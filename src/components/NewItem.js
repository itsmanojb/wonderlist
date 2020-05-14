import React, { useContext, useState } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const NewItem = () => {
  const { dispatch } = useContext(WonderItemContext);
  const [itemName, setItemName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      item: { name: itemName },
    });
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
