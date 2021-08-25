import {
    RESET_FILMS_LOADING_TOP_RATED_FILMS,
    SET_CURRENT_PAGE_TOP_RATED_FILMS,
    SET_ERROR_TOP_RATED_FILMS,
    SET_TOP_RATED_FILMS
} from "../actionTypes";

const initialState = {
    FilmsInfo: [],
    isLoading: true,
    FilmsError: null,
    currentPage: 1,
    totalPages: 0
};

export const topRatedFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_RATED_FILMS : {
            return {
                ...state,
                FilmsInfo: action.payload.filmInfo,
                totalPages: action.payload.total_pages,
                isLoading: false
            }
        }
        case SET_ERROR_TOP_RATED_FILMS: {
            return {
                ...state,
                FilmsError: action.payload,
                isLoading: false
            }
        }
        case SET_CURRENT_PAGE_TOP_RATED_FILMS: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case RESET_FILMS_LOADING_TOP_RATED_FILMS: {
            return {
                ...state,
                isLoading: false
            }
        }
        default :
            return state;
    }
}
