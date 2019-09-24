import {takeLatest,all} from 'redux-saga/effects';
import  {FLAT_ACTIONS} from '../actions/types';
import flatSaga from './flatSaga';

export default function* watch(){
    yield all([
        takeLatest(FLAT_ACTIONS.VIEW_ALL_FLATS.REQUEST,flatSaga)
    ])
}