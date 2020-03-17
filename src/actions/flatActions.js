/* eslint-disable require-jsdoc */
import ApiConstants from '../constants/apiConstants';

import { FLAT_ACTIONS } from './types';

export const flatInfoRequest = () => ({
  type: FLAT_ACTIONS.VIEW_ALL_FLATS.REQUEST,
  meta: {
    offline: {
      effect: {
        url: ApiConstants.BASE_URL + ApiConstants.TRENDING_FLAT,
        method: 'GET'
      },
      commit: { type: 'FLAT_ACTIONS_COMMIT' },
      rollback: { type: 'FLAT_ACTIONS_ROLLBACK' }
    }
  }
});

export const flatInfoFailed = error => ({
  type: FLAT_ACTIONS.VIEW_ALL_FLATS.FAILED,
  payload: {
    error
  }
});

export const flatInfoResponse = response => ({
  type: FLAT_ACTIONS.VIEW_ALL_FLATS.RESPONSE,
  payload: {
    response
  }
});
