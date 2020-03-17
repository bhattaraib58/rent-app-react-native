/* eslint-disable require-jsdoc */
import { FAVOURITE_FLAT } from './types';

export const addFlatToFavorite = flatInfo => ({
  type: FAVOURITE_FLAT.ADD_FLAT_TO_FAVORITE,
  payload: {
    flatInfo
  }
});

export const removeFlatFromFavorite = flatInfo => ({
  type: FAVOURITE_FLAT.REMOVE_FLAT_FROM_FAVORITE,
  payload: {
    flatInfo
  }
});
