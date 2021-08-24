import {
    RESET_FILMS_LOADING,
    SET_CURRENT_PAGE_POPULAR_FILMS,
    SET_ERROR_POPULAR_FILMS,
    SET_POPULAR_FILMS
} from "../actionTypes";
import {getPopularFilmsData,} from "../../services/movies.services";


export const getPopularFilms = (page) => async (dispatch) => {
    try {
        const {data: {total_pages, results: filmInfo}} = await getPopularFilmsData('uk-UA', page);
        dispatch(setPopularFilms(filmInfo, total_pages));
    } catch (error) {
        dispatch(setErrorForPopularFilms(error));
    } finally {
        dispatch(resetFilmsLoading());
    }
}

export const setPopularFilms = (filmInfo, total_pages) => ({type: SET_POPULAR_FILMS, payload: {filmInfo, total_pages}});
export const setErrorForPopularFilms = (error) => ({type: SET_ERROR_POPULAR_FILMS, payload: error});
export const resetFilmsLoading = () => ({type: RESET_FILMS_LOADING});
export const setCurrentPagePopularFilms = (page) => ({type: SET_CURRENT_PAGE_POPULAR_FILMS, payload: page})

