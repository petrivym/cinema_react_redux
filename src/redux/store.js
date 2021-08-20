import {createStore} from "redux";
import {reducer} from "./reducers/film.reducer";

export const store = createStore(reducer);
