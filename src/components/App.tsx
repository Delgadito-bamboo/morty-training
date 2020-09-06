import React, { useReducer } from 'react';
import HomePage from './HomePage';
import FavPage from './FavPage';
import reducer from '../reducers';
import { IState } from '../interfaces';
import AppContext from '../contexts/AppContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const initialState: IState = {
    episodes: [],
    favorites: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/favs">
              <FavPage />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
