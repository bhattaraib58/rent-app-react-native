import * as LoginAction from './loginActions';
import {flatInfoRequest,flatInfoResponse,flatInfoFailed} from './flatActions';

export const ActionCreators = {
    flatInfoRequest:flatInfoRequest,
    flatInfoResponse:flatInfoResponse,
    flatInfoFailed:flatInfoFailed,
};