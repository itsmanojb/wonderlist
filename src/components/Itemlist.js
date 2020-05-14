import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';
import ItemDetails from './ItemDetails';

const ItemList = () => {
  const { items } = useContext(WonderItemContext);
  return items.length ? (
    <div className="itemlist">
      <ul>
        {items.map((item) => {
          return <ItemDetails item={item} key={item.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No items in your list</div>
  );
};

export default ItemList;
