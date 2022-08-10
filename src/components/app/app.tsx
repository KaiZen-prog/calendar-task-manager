import React from 'react';
import {HashRouter } from 'react-router-dom';
import Calendar from '../calendar';
import GlobalStyle from '../../theme/globalStyle';

const App = () => {
  return (
  <HashRouter>
    <GlobalStyle/>
    <div className="app">
      <Calendar/>
      <main className="app__main">
      </main>
    </div>
  </HashRouter>
  );
};

App.displayName = 'App';

export default App;
