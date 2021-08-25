export const generateGenresForFilm =  (numberGenres, genres) => {
    
    const filmGenres = [];
    for (const numberGenre of numberGenres) {
        genres.find(({id, name}) => {
            if (id === numberGenre) {
                filmGenres.push(name);
            }
        });
    }
    return filmGenres;
}

