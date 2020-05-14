import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const ItemDetails = ({ item }) => {
  const { removeItem } = useContext(WonderItemContext);
  return (
    <li onClick={() => removeItem(item.id)}>
      <div className="item">{item.name}</div>
    </li>
  );
};

export default ItemDetails;
