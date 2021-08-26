import MoviesListCard from "./moviesListCard/moviesListCard";
import "./moviesListStyle.css";
import {generatePaginationPagesArray} from "../../../helpers";
import ErrorHandler from "../../errorHendler/errorHandler";

export default function MoviesList({filmStore, pagination}) {
    const {
        isLoading,
        FilmsInfo,
        FilmsError,
        currentPage,
        totalPages
    } = filmStore;

    const pages = [];
    generatePaginationPagesArray(pages, totalPages, currentPage);

    console.log(pages);

    if (isLoading) {
        return (
            <h1>Loading</h1>
        )
    }

    if (FilmsError) {
        return (
            <ErrorHandler to={{
                pathname: '/error',
                state: {referrer: FilmsError}
            }}/>
        )
    }

    return (
        <div>
            <div>
                {FilmsInfo && FilmsInfo.map(film => <MoviesListCard key={film.id} film={film}/>)}
            </div>
            <div className="pages">
                {pages && pages.map((page, index) =>
                    <span
                        key={index}
                        className={currentPage === page ? "currentPage" : "page"}
                        onClick={() => pagination(page)}>
                        {page}
                    </span>)}
            </div>
        </div>
    );
}



