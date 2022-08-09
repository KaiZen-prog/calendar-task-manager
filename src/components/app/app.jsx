import React from 'react';
import {HashRouter } from 'react-router-dom';
import Header from '../header/header';

const App = () => {
  return (
  <HashRouter>
    <div className="app">
      <Header/>
      <main className="app__main">
      </main>
    </div>
  </HashRouter>
  );
};

App.displayName = 'App';

export default App;
