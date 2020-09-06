import axios from 'axios';
import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from './actionTitle';
import { IState, IEpisode, Dispatch, IAction } from '../interfaces';

export const fetchData = async (dispatch: Dispatch) => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const response = await axios.get(URL);

  return dispatch({
    type: FETCH_DATA,
    payload: response.data._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  const episodeInFav = state.favorites.includes(episode);
  let dispatchObj = {
    type: ADD_FAV,
    payload: episode,
  };

  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => episode.id !== fav.id
    );
    dispatchObj = {
      type: REMOVE_FAV,
      payload: favWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};
