import {SET_CURRENT_PAGE_TOP_RATED_FILMS,RESET_FILMS_LOADING_TOP_RATED_FILMS, SET_ERROR_TOP_RATED_FILMS, SET_TOP_RATED_FILMS} from "../actionTypes";
import {getTopRatedFilmsData} from "../../services/movies.services";


export const getTopRatedFilms = (page) => async (dispatch) => {
    try {

        const {data: {total_pages, results: filmInfo}} = await getTopRatedFilmsData('uk-UA', page);
        console.log(filmInfo,total_pages);
        dispatch(setTopRatedFilms(filmInfo, total_pages));
    } catch (error) {
        dispatch(setErrorForTopRatedFilm(error));
    } finally {
        dispatch(resetLoadingTopRatedFilms());
    }
}


export const setTopRatedFilms = (filmInfo, total_pages) => ({type: SET_TOP_RATED_FILMS, payload: {filmInfo, total_pages}});
export const setErrorForTopRatedFilm = (error) => ({type: SET_ERROR_TOP_RATED_FILMS, payload: error});
export const resetLoadingTopRatedFilms = () => ({type: RESET_FILMS_LOADING_TOP_RATED_FILMS});
export const setCurrentPageTopRatedFilms = (page) => ({type: SET_CURRENT_PAGE_TOP_RATED_FILMS, payload: page});






