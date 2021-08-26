export default function SelectorGenres({genres,handlerGenres,pagination}) {
    return (
        <div>
            <select onChange={(e) =>handlerGenres(e.target.value)}>
                {genres.map(genre => <option value={genre.id}>{genre.name}</option>)}
            </select>
        </div>
    );
}
