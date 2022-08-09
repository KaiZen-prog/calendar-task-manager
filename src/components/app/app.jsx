import React from 'react';
import {HashRouter } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';


const App = () => {
  return (
  <HashRouter>
    <div className="app">
      <Header/>
      <main className="app__main">
      </main>
      <Footer/>
    </div>
  </HashRouter>
  );
};

App.displayName = 'App';

export default App;
