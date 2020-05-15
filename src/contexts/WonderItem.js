import React, { createContext, useReducer, useEffect } from 'react';
import { listReducer } from '../reducers/ListReducer';

export const WonderItemContext = createContext();

const WonderItemContextProvider = (props) => {
  const [lists, dispatch] = useReducer(listReducer, [], () => {
    const data = localStorage.getItem('wonderItems');
    return data ? JSON.parse(data) : [];
  });
  useEffect(() => {
    localStorage.setItem('wonderItems', JSON.stringify(lists));
  }, [lists]);
  return (
    <WonderItemContext.Provider value={{ lists, dispatch }}>
      {props.children}
    </WonderItemContext.Provider>
  );
};

export default WonderItemContextProvider;
