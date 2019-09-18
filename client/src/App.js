import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

import CharacterState from './context/character/CharacterState';
import './App.css';

const App = () => {
  return (
    <CharacterState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </CharacterState>
  );
};

export default App;
