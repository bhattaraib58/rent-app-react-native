import { flatInfoRequest, flatInfoResponse, flatInfoFailed } from './flatActions';
import * as LoginAction from './loginActions';

export const ActionCreators = {
    flatInfoRequest: flatInfoRequest,
    flatInfoResponse: flatInfoResponse,
    flatInfoFailed: flatInfoFailed,
};
