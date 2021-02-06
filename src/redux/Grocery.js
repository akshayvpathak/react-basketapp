import * as ActionTypes from './ActionTypes';

export const Grocery = (state = {
    isLoading: true,
    errMess: null,
    grocery: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GROCERY:
            return { ...state, isLoading: false, errMess: null, grocery: action.payload};

        case ActionTypes.GROCERY_LOADING:
            return { ...state, isLoading: true, errMess: null, grocery: [] };

        case ActionTypes.GROCERY_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, grocery: [] };
        default:
            return state;
    }
}