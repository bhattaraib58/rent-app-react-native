import { addFlatToFavorite, removeFlatFromFavorite } from './favoriteFlat';
import { flatInfoRequest, flatInfoResponse, flatInfoFailed } from './flatActions';

export const ActionCreators = {
  flatInfoRequest: flatInfoRequest,
  flatInfoResponse: flatInfoResponse,
  flatInfoFailed: flatInfoFailed,
  addFlatToFavorite: addFlatToFavorite,
  removeFlatFromFavorite: removeFlatFromFavorite
};
