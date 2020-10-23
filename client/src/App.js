import React from 'react';
import cls from './App.module.css';

import { StateContextProvider } from './context/stateContext';
import Navbar from './components/navbar/Navbar';
import TuitForm from './components/tuitForm/TuitForm';
import Feed from './components/feed/Feed';

function App() {
  return (
    <div className={cls.app}>
      <StateContextProvider>
        <Navbar/>
        <main className={cls.mainCtn}>
          <TuitForm/>
          <Feed/>
        </main>
      </StateContextProvider>
    </div>
  );
}

export default App;
