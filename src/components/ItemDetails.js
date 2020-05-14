import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const ItemDetails = ({ item }) => {
  const { dispatch } = useContext(WonderItemContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>
      <div className="item">{item.name}</div>
    </li>
  );
};

export default ItemDetails;
