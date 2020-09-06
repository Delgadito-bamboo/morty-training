import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from '../actions/actionTitle';
import { IState, IAction } from '../interfaces';

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, episodes: action.payload };
    case ADD_FAV:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAV:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export default reducer;
