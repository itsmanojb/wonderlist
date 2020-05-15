import React from 'react';
import Navbar from './components/Navbar';
import WonderItemContextProvider from './contexts/WonderItem';
import AllList from './components/AllLists';
import NewList from './components/NewList';

function App() {
  return (
    <div className="App">
      <WonderItemContextProvider>
        <Navbar />
        <AllList />
        <NewList />
      </WonderItemContextProvider>
    </div>
  );
}

export default App;
