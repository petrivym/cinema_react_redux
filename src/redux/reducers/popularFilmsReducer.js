import {SET_ERROR, SET_FILMS} from "../actionTypes";

const initialState = {
    filmsInfo: [],
    isLoading: true,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS : {
            return {
                ...state,
                filmsInfo: action.payload,
                isLoading: false
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default :
            return state;
    }
}
