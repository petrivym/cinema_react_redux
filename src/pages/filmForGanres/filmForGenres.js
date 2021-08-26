import Header from "../../components/header/header";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentGenres, setCurrentPageGenresFilms, setFilmByGenres, setGenresForStore} from "../../redux";
import {useEffect} from "react";
import MoviesList from "../../components/moviesLists/moviesList/moviesList";
import SelectorGenres from "../../components/SelectorGenres/selectorGenres";

export default function FilmForGenres() {
    const dispatch = useDispatch();
    const genresStoreFilms = useSelector(({genresStoreFilms}) => genresStoreFilms);
    const {
        genres,
        currentPage,
        currentGenres
    } = genresStoreFilms

    useEffect(() => {
        dispatch(setGenresForStore());
    }, [])

    const loadFilmsSelectGenres = (GenresCode) => {
        dispatch(setCurrentGenres(GenresCode))
    }

    useEffect(() => {
        dispatch(setFilmByGenres(currentPage, currentGenres))
    }, [currentGenres, currentPage])

    const changPageGenresFilms = (page) => {
        dispatch(setCurrentPageGenresFilms(page));
    }


    return (
        <div>
            <Header/>
            <SelectorGenres genres={genres} handlerGenres={loadFilmsSelectGenres}/>
            <MoviesList filmStore={genresStoreFilms} pagination={changPageGenresFilms}/>
            <footer/>
        </div>
    );
}
