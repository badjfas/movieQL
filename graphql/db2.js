import fetch from "node-fetch";

const API_KEYS="https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit,rating) => {
    let REQUEST_URL=API_KEYS;
    if(limit>0){
        REQUEST_URL += `&limit=${limit}`;
    }
    
    if(rating>0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json=>json.data.movies);
};