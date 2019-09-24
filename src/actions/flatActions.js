import { FLAT_ACTIONS } from './types';

export const flatInfoRequest = () => ({
    type: FLAT_ACTIONS.VIEW_ALL_FLATS.REQUEST,
});


export const flatInfoFailed = () => ({
    type: FLAT_ACTIONS.VIEW_ALL_FLATS.FAILED,
});


export const flatInfoResponse = (response) => ({
    type: FLAT_ACTIONS.VIEW_ALL_FLATS.RESPONSE,
    payload:{
        response
    }
});