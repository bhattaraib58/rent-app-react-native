import { flatInfoRequest, flatInfoResponse, flatInfoFailed } from './flatActions';
import { addFlatToFavorite, removeFlatFromFavorite } from './favoriteFlat';

export const ActionCreators = {
  flatInfoRequest: flatInfoRequest,
  flatInfoResponse: flatInfoResponse,
  flatInfoFailed: flatInfoFailed,
  addFlatToFavorite: addFlatToFavorite,
  removeFlatFromFavorite: removeFlatFromFavorite
};
