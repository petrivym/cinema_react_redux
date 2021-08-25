import {popularFilmReducer} from "./popularFilmsReducer";
import {topRatedFilmReducer} from "./topRatedFilmsReducer";
import {genresFilmsReducer} from "./genresFilmsReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    filmPopularReducer: popularFilmReducer,
    filmTopRatedReducer: topRatedFilmReducer,
    genresStoreFilms: genresFilmsReducer
})

