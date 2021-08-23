import {SET_ERROR,SET_FILMS} from "../actionTypes";

export const setFilms = (value) => ({type:SET_FILMS, payload: value});
export const setError = (error) => ({type:SET_ERROR, payload: error});

