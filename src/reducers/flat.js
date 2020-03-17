import { FLAT_ACTIONS } from '../actions/types';

const initState = {
  isLoading: false,
  flatInfo: {},
  error: {}
};

/**
 * Flat Reducer.
 *
 * @param {*} [state]
 * @param {*} action
 * @returns {Object} Updated State.
 */
const flatReducer = (state = initState, action) => {
  switch (action.type) {
    case FLAT_ACTIONS.VIEW_ALL_FLATS.REQUEST:
      return { ...state, isLoading: true };

    case FLAT_ACTIONS.VIEW_ALL_FLATS.RESPONSE:
      return { ...state, response: action.payload.response, isLoading: false };

    case FLAT_ACTIONS.VIEW_ALL_FLATS.FAILED:
      return { ...state, error: action.payload.error, isLoading: false };

    case 'FLAT_ACTIONS_COMMIT':
      console.warn('action');

      return { ...state, response: action.payload, isLoading: false };

    case 'FLAT_ACTIONS_ROLLBACK':
      console.warn('action');

      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default flatReducer;
