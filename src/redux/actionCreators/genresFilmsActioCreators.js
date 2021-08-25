import {
    SET_GENRES_FILMS,
    SET_ERROR_GENRES_FILMS
} from "../actionTypes";

import {getGenresFilms,} from "../../services/movies.services";


export const setGenresForStore = () => async (dispatch) => {
    try {
        const {data: {genres}} = await getGenresFilms('uk');
        dispatch(setGenresForFilms(genres));
    } catch (error) {
        dispatch(setErrorForPopularFilms(error));
    }
}

export const setGenresForFilms = (genres) => ({type: SET_GENRES_FILMS, payload: genres});
export const setErrorForPopularFilms = (error) => ({type: SET_ERROR_GENRES_FILMS, payload: error});


// export const resetFilmsLoading = () => ({type: RESET_FILMS_LOADING});
// export const setCurrentPagePopularFilms = (page) => ({type: SET_CURRENT_PAGE_POPULAR_FILMS, payload: page})

