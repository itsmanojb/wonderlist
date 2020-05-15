import React, { useContext, useState } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const NewListItem = ({ listId }) => {
  const { dispatch } = useContext(WonderItemContext);
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_LIST_ITEM',
      payload: {
        listId,
        itemName,
        completed: false,
      },
    });
    setItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        placeholder="New item"
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewListItem;
