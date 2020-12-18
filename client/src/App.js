import React from 'react';
import cls from './App.module.css';

import { TuitContextProvider } from './context/tuitContext';
import { UserContextProvider } from './context/userContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TuitForm from './components/TuitForm';
import Feed from './components/Feed';

function App() {
  return (
    <div className={cls.app}>
      <UserContextProvider>
      <TuitContextProvider>
        <Navbar/>
        <main className={cls.mainCtn}>
          <Header/>
          <TuitForm/>
          <Feed/>
        </main>
      </TuitContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
