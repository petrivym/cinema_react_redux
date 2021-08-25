import {SET_ERROR_GENRES_FILMS, SET_GENRES_FILMS} from "../actionTypes";

const initialState = {
    genres: [],
    genresFilmInfo: [],
    error: null
};

export const genresFilmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES_FILMS : {
            return {
                ...state,
                genres: action.payload,

            }
        }        case SET_ERROR_GENRES_FILMS : {
            return {
                ...state,
                error: action.payload,

            }
        }
        default :
            return state;
    }
}
