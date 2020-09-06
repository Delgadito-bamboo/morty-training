import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { state } = useContext(AppContext);

  return (
    <header>
      <div>Morty and Marty</div>
      <div>fav: {state.favorites.length}</div>
      <Link to="/">Home</Link>
      <Link to="/favs">favs</Link>
    </header>
  );
};

export default Header;
