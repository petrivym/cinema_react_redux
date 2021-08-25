import axios from "axios";

const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWFkZTgwZjNkMTEwZWI4NjE4ZjkxZDVmM2ZhOTAwZiIsInN1YiI6IjYwYzNjNDlhZGMxY2I0MDA2ZDRhYWE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Ona2XveMNxwVnJ47-6HoFxD2AJrh6-G-BADg1OTgbM';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {'Authorization': AUTH_TOKEN}
});


const getTopRatedFilmsData = async (language = 'uk-UA', page = '1') => {
    return await axiosInstance
        .post(`/top_rated?language=${language}&page=${page}`);

}

const getPopularFilmsData = async (language = 'uk-UA', page = '1') => {
    return await axiosInstance
        .post(`/popular?language=${language}&page=${page}`);

}

const getGenresFilms = async (language = 'uk') => {
    return await axiosInstance
        .get(`https://api.themoviedb.org/3/genre/movie/list?language=${language}`);
}


export {
    getPopularFilmsData,
    getTopRatedFilmsData,
    getGenresFilms
}
