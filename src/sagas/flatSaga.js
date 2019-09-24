import ApiConstants from "../api/APiConstants";
import * as FlatInfoActions from "../actions/flatActions";

export default function* getFlatInfoAsync() {
    const json = yield fetch(ApiConstants.BASE_URL + ApiConstants.FLAT)
        .then(response => response.json());
    console.log(json);

    yield put(FlatInfoActions.flatInfoResponse(json));
}