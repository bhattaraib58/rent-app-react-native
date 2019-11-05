import { takeLatest, all } from 'redux-saga/effects';
import { FLAT_ACTIONS } from '../actions/types';
import flatSaga from './flatSaga';

/**
 * Watch for Actions to be Dispatched and Call Corresponding Function.
 *
 */
export default function* watch() {
  yield all([takeLatest(FLAT_ACTIONS.VIEW_ALL_FLATS.REQUEST, flatSaga)]);
}
