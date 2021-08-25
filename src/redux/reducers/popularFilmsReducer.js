import {
    SET_ERROR_POPULAR_FILMS,
    SET_POPULAR_FILMS,
    RESET_FILMS_LOADING,
    SET_CURRENT_PAGE_POPULAR_FILMS
} from "../actionTypes";

const initialState = {
    FilmsInfo: [],
    isLoading: true,
    FilmsError: null,
    currentPage: 1,
    totalPages:0
};

export const popularFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_FILMS : {
            return {
                ...state,
                FilmsInfo: action.payload.filmInfo,
                totalPages:action.payload.total_pages,
                isLoading: false
            }
        }
        case SET_ERROR_POPULAR_FILMS: {
            return {
                ...state,
                FilmError: action.payload,
                isLoading: false
            }
        }
        case SET_CURRENT_PAGE_POPULAR_FILMS: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case RESET_FILMS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        default :
            return state;
    }
}
