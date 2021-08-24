import {
    RESET_FILMS_LOADING_TOP_RATED_FILMS,
    SET_CURRENT_PAGE_TOP_RATED_FILMS,
    SET_ERROR_TOP_RATED_FILMS,
    SET_TOP_RATED_FILMS
} from "../actionTypes";

const initialState = {
    topRatedFilmsInfo: [],
    isLoading: true,
    topRatedFilmsError: null,
    currentPage: 1,
    perPage: 10,
    totalPages: 0
};

export const topRatedFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_RATED_FILMS : {
            return {
                ...state,
                topRatedFilmsInfo: action.payload.filmInfo,
                isLoading: false,
                totalPages: action.payload.total_pages
            }
        }
        case SET_ERROR_TOP_RATED_FILMS: {
            return {
                ...state,
                topRatedFilmsError: action.payload,
                isLoading: false
            }
        }
        case SET_CURRENT_PAGE_TOP_RATED_FILMS: {
            return {
                ...state,
                currentPage: action.payload
            }
        }    case RESET_FILMS_LOADING_TOP_RATED_FILMS: {
            return {
                ...state,
                isLoading: false
            }
        }
        default :
            return state;
    }
}
