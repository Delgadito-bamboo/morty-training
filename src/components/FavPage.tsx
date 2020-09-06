import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Header from './Header';
import { toggleFavAction } from '../actions/Actions';
import { IEpisodeProps } from '../interfaces';

const ContentsList = React.lazy<any>(() => import('./ContentList'));

const FavPage = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);

  const props: IEpisodeProps = {
    episodes: state.favorites,
    toggleFavAction,
    store: { state, dispatch },
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

export default FavPage;
