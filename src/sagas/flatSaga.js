import ApiConstants from "../api/APiConstants";
import * as FlatInfoActions from "../actions/flatActions";
import {put} from 'redux-saga/effects'

export default function* getFlatInfoAsync() {
    try{
        const result = yield fetch(ApiConstants.BASE_URL + ApiConstants.FLAT)
        .then(response => response.json());
        yield put(FlatInfoActions.flatInfoResponse(result));  
    }
    catch(error)
    {
        yield put(FlatInfoActions.flatInfoFailed(error));  
    }
}