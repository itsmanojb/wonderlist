import React, { useContext, useState } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const NewList = () => {
  const { dispatch } = useContext(WonderItemContext);
  const [listName, setListName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NEW_LIST',
      list: {
        name: listName,
        pinned: false,
        lastUpdated: new Date().getTime(),
        items: [],
      },
    });
    setListName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={listName}
        placeholder="New List"
        onChange={(e) => setListName(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default NewList;
