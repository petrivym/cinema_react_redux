import {popularFilmReducer} from "./popularFilmsReducer";
import {topRatedFilmReducer} from "./topRatedFilmsReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    filmPopularReducer: popularFilmReducer,
    filmTopRatedReducer: topRatedFilmReducer
})

