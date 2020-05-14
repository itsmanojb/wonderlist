import React, { createContext, useState } from 'react';
import uuid from 'uuid/dist/v1';

export const WonderItemContext = createContext();

const WonderItemContextProvider = (props) => {
  const [items, setItems] = useState([
    { name: 'paper', id: 1 },
    { name: 'pencil', id: 2 },
  ]);

  const addItem = (name) => {
    setItems([...items, { name, id: uuid() }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <WonderItemContext.Provider value={{ items, addItem, removeItem }}>
      {props.children}
    </WonderItemContext.Provider>
  );
};

export default WonderItemContextProvider;
