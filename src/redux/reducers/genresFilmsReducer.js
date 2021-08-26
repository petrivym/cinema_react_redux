import {
    SET_ERROR_GENRES_FILMS,
    SET_GENRES_FILMS,
    SET_FILMS_BY_GENRES,
    RESET_LOADING_FILMS_BY_GENRES,
    SET_CURRENT_GENRES,
    SET_CURRENT_PAGE_FILMS_BY_GENRES
} from "../actionTypes";

const initialState = {
    genres: [],
    FilmsInfo: [],
    FilmsError: null,
    currentPage: 1,
    totalPages: 0,
    isLoading: true,
    currentGenres: '28'
};


export const genresFilmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES_FILMS : {
            return {
                ...state,
                genres: action.payload,

            }
        }
        case SET_ERROR_GENRES_FILMS : {
            return {
                ...state,
                FilmsError: action.payload,
            }
        }
        case SET_FILMS_BY_GENRES : {
            return {
                ...state,
                FilmsInfo: action.payload.filmInfo,
                totalPages: action.payload.total_pages,
                isLoading: false
            }
        }
        case SET_CURRENT_GENRES : {
            return {
                ...state,
                currentGenres: action.payload,
            }
        }
        case SET_CURRENT_PAGE_FILMS_BY_GENRES : {
            return {
                ...state,
                currentPage: action.payload,
            }
        }
        case RESET_LOADING_FILMS_BY_GENRES : {
            return {
                ...state,
                isLoading: false
            }
        }
        default :
            return state;
    }
}
