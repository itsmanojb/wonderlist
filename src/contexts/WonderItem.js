import React, { createContext, useReducer, useEffect } from 'react';
import { itemReducer } from '../reducers/ItemReducer';

export const WonderItemContext = createContext();

const WonderItemContextProvider = (props) => {
  const [items, dispatch] = useReducer(itemReducer, [], () => {
    const data = localStorage.getItem('wonderItems');
    return data ? JSON.parse(data) : [];
  });
  useEffect(() => {
    localStorage.setItem('wonderItems', JSON.stringify(items));
  }, [items]);
  return (
    <WonderItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </WonderItemContext.Provider>
  );
};

export default WonderItemContextProvider;
