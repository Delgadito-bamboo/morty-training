import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import Header from './Header';
import { fetchData, toggleFavAction } from '../actions/Actions';
import { IEpisodeProps } from '../interfaces';

const ContentsList = React.lazy<any>(() => import('./ContentList'));

const HomePage = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    state.episodes.length === 0 && fetchData(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <>
        <Header />
        <ContentsList {...props} />
      </>
    </React.Suspense>
  );
};

export default HomePage;
