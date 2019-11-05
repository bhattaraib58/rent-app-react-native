import { put } from 'redux-saga/effects';

import * as FlatInfoActions from '../actions/flatActions';
import ApiConstants from '../constants/apiConstants';

export default function* getFlatInfoAsync() {
  try {
    const result = yield fetch(ApiConstants.BASE_URL + ApiConstants.TRENDING_FLAT).then(response => response.json());

    yield put(FlatInfoActions.flatInfoResponse(result));
  } catch (error) {
    yield put(FlatInfoActions.flatInfoFailed(error));
  }
}
