import React, { createContext, useReducer } from 'react';
import { itemReducer } from '../reducers/ItemReducer';

export const WonderItemContext = createContext();

const WonderItemContextProvider = (props) => {
  const [items, dispatch] = useReducer(itemReducer, []);

  return (
    <WonderItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </WonderItemContext.Provider>
  );
};

export default WonderItemContextProvider;
