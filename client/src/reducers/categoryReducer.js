import {SWITCH_CAT} from '../actions/types';

const initialState = {currentCategory: 1};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_CAT:
            return {...state, currentCategory: action.payload}
        default:
            return state;
    }
};

export default categoryReducer;