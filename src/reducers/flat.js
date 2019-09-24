import { FLAT_ACTIONS } from '../actions/types';

const flatReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case FLAT_ACTIONS.VIEW_ALL_FLATS.REQUEST:
            return { ...state, isLoading: true };

        case FLAT_ACTIONS.VIEW_ALL_FLATS.RESPONSE:
            return { ...state, flatList: action, isLoading: false };

        case FLAT_ACTIONS.VIEW_ALL_FLATS.FAILED:
            return { ...state, error: action, isLoading: false };

        case 'FLAT_ACTIONS_COMMIT':
            return { ...state, flatList: action, isLoading: false }

        case 'FLAT_ACTIONS_ROLLBACK':
            return { ...state, error: action, isLoading: false }

        default:
            return state;
    }
}

export default flatReducer;