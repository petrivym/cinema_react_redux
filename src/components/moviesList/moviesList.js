import MoviesListCard from "./moviesListCard/moviesListCard";
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react";
import ErrorHandler from "../errorHendler/errorHandler";
import {getPopularFilms, setCurrentPagePopularFilms} from "../../redux";
import "./moviesListStyle.css";
import {generatePaginationPagesArray} from "../../helpers";

export default function MoviesList() {


    const dispatch = useDispatch();
    const {
        isLoading,
        popularFilmsInfo,
        popularFilmError,
        currentPage,
        totalPages
    } = useSelector(({filmPopularReducer}) => filmPopularReducer);

    const pages = [];
    generatePaginationPagesArray(pages, totalPages, currentPage);
    console.log(pages);

    useEffect(() => {
        dispatch(getPopularFilms(currentPage));
    }, [currentPage]);

    if (isLoading) {
        return (
            <h1>Loading</h1>
        )
    }

    if (popularFilmError) {
        return (
            <ErrorHandler to={{
                pathname: '/error',
                state: {referrer: popularFilmError}
            }}/>
        )
    }

    return (
        <div>
            <div>
                {popularFilmsInfo && popularFilmsInfo.map(film => <MoviesListCard key={film.id} film={film}/>)}
            </div>
            <div className="pages">
                {pages && pages.map((page, index) =>
                    <span
                        key={index}
                        className={currentPage === page ? "currentPage" : "page"}
                        onClick={() => dispatch(setCurrentPagePopularFilms(page))}>
                        {page}
                    </span>)}
            </div>
        </div>
    );
}



