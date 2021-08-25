import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPopularFilms, getTopRatedFilms, setCurrentPagePopularFilms, setCurrentPageTopRatedFilms} from "../../redux";
import MoviesList from "./moviesList/moviesList";

export default function MoviesLists() {
    const dispatch = useDispatch();

    const filmPopularStore = useSelector(({filmPopularReducer}) => filmPopularReducer);
    const filmTopRatedStore = useSelector(({filmTopRatedReducer}) => filmTopRatedReducer);

    useEffect(() => {
        dispatch(getPopularFilms(filmPopularStore.currentPage));
    }, [filmPopularStore.currentPage]);

    useEffect(() => {
        dispatch(getTopRatedFilms(filmTopRatedStore.currentPage));
    }, [filmTopRatedStore.currentPage]);


    const changPagePopularFilms = (page) => dispatch(setCurrentPagePopularFilms(page));
    const changPageTopRatedFilms = (page) => dispatch(setCurrentPageTopRatedFilms(page));


    return (
        <div>
            <MoviesList filmStore={filmPopularStore} pagination={changPagePopularFilms}/>
            <MoviesList filmStore={filmTopRatedStore} pagination={changPageTopRatedFilms}/>
        </div>
    );
}
