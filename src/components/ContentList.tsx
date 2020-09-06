import React from 'react';
import { IEpisode } from '../interfaces';

export default function ContentList(props: any): Array<JSX.Element> {
  const { episodes, store, toggleFavAction, favorites } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id}>
        <img src={episode.image.medium} alt="alt" />
        <div>{episode.name}</div>
        <button
          type="button"
          onClick={() => toggleFavAction(state, dispatch, episode)}
        >
          {favorites.find((fav: IEpisode) => fav.id === episode.id)
            ? 'Unfav'
            : 'fav'}
        </button>
      </section>
    );
  });
}
