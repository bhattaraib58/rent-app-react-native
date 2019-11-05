import { FAVOURITE_FLAT } from '../actions/types';
import { checkDataExists } from '../utils/checkDataExists';

const initState = {
  favoriteFlat: []
};

function addFlatToFavorite(favoriteFlat, flatInfo) {
  if (!checkDataExists(favoriteFlat, flatInfo)) {
    favoriteFlat.push(flatInfo);
  }
  
  return favoriteFlat;
}

function removeFlatFromFavorite(favoriteFlat, flatInfo) {
  return favoriteFlat.filter(dataInfo => {
    return dataInfo.id !== flatInfo.id;
  });
}

export const favoriteFlatReducer = (state = initState, action) => {
  switch (action.type) {
    case FAVOURITE_FLAT.ADD_FLAT_TO_FAVORITE:
      state.favoriteFlat = addFlatToFavorite(state.favoriteFlat, action.payload.flatInfo);

      return { ...state };

    case FAVOURITE_FLAT.REMOVE_FLAT_FROM_FAVORITE:
      state.favoriteFlat = removeFlatFromFavorite(state.favoriteFlat, action.payload.flatInfo);

      return { ...state };

    default:
      return state;
  }
};
