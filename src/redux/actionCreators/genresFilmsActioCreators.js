import {
    SET_GENRES_FILMS,
    SET_ERROR_GENRES_FILMS,
    SET_FILMS_BY_GENRES,
    RESET_LOADING_FILMS_BY_GENRES,
    SET_CURRENT_GENRES,
    SET_CURRENT_PAGE_FILMS_BY_GENRES,
} from "../actionTypes";

import {getGenres, getGenresFilms,} from "../../services/movies.services";


export const setGenresForStore = () => async (dispatch) => {
    try {
        const {data: {genres}} = await getGenres('uk');
        dispatch(setGenresForFilms(genres));
    } catch (error) {
        dispatch(setErrorForGenresFilms(error));
    }
}

export const setFilmByGenres = (page = 1, genres = 23) => async (dispatch) => {
    try {
        const {data: {total_pages, results: filmInfo}} = await getGenresFilms(page, genres);
        dispatch(setFilmsByGenres(total_pages, filmInfo));
    } catch (error) {
        dispatch(setFilmByGenres());
    } finally {
        dispatch(resetLoadingFilmsByGenres());
    }
}


export const setGenresForFilms = (genres) => ({type: SET_GENRES_FILMS, payload: genres});
export const setErrorForGenresFilms = (error) => ({type: SET_ERROR_GENRES_FILMS, payload: error});
export const resetLoadingFilmsByGenres = () => ({type: RESET_LOADING_FILMS_BY_GENRES});
export const setFilmsByGenres = (total_pages, filmInfo) => ({type: SET_FILMS_BY_GENRES, payload: {total_pages,filmInfo}});

export const setCurrentGenres = (genres) => ({type: SET_CURRENT_GENRES, payload: genres});
export const setCurrentPageGenresFilms = (page) => ({type: SET_CURRENT_PAGE_FILMS_BY_GENRES, payload: page});


