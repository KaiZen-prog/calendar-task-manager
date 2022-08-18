import React from 'react';
import {HashRouter } from 'react-router-dom';
import Calendar from '../calendar';
import ControlPanel from "../control-panel";
import GlobalStyle from '../../theme/globalStyle';
import WithTaskPopup from '../../hocs/with-task-popup/with-task-popup';

const App = () => {
  return (
  <HashRouter>
    <GlobalStyle/>
    <div className="app">
      <ControlPanel/>
      <WithTaskPopup component={Calendar}/>
      <main className="app__main">
      </main>
    </div>
  </HashRouter>
  );
};

App.displayName = 'App';

export default App;
