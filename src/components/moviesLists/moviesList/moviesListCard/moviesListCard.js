import {generateGenresForFilm} from "../../../../helpers/generateGenresForFilm";
import {useSelector} from "react-redux";

export default function MoviesListCard({film}) {
    const {genres} = useSelector(({genresStoreFilms}) => genresStoreFilms)

    const currentGenres = generateGenresForFilm(film.genre_ids, genres);
    return (
        <div className="MoviesListCard">
            <div className="MoviesListCard-Container">
                <div className="MoviesListCard__img">
                    <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt="films-Img"/>
                </div>
                <div className="MoviesListCard-container-info">
                    <div className="MoviesListCard-Title">
                        <h2>
                            {film.original_title}
                        </h2>
                    </div>
                    <div className="MoviesListCard-genres-lists">
                        {
                            currentGenres.map((value) => <span> {value} </span>)
                        }

                    </div>

                </div>
                <div className="MoviesListCard-container-info">
                    <div className="MoviesListCard-language">
                        <p>
                            {film.original_language}
                        </p>
                    </div>
                    <div className="MoviesListCard-popularity">
                        {film.popularity}
                    </div>
                </div>
            </div>

            <div className="MoviesListsCard-overview">
                <p>
                    {film.overview}
                </p>
            </div>
        </div>
    );
}
