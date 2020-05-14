import React from 'react';
import Navbar from './components/Navbar';
import WonderItemContextProvider from './contexts/WonderItem';
import ItemList from './components/Itemlist';
import NewItem from './components/NewItem';

function App() {
  return (
    <div className="App">
      <WonderItemContextProvider>
        <Navbar />
        <ItemList />
        <NewItem />
      </WonderItemContextProvider>
    </div>
  );
}

export default App;
