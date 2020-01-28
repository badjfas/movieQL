export let movies= [
    {
        id:0,
        movieName:"무비0",
        score:4
    },
    {
        id:1,
        movieName:"무비1",
        score:3
    },
    {
        id:2,
        movieName:"무비2",
        score:2
    },
    {
        id:3,
        movieName:"무비3",
        score:5
    },
    {
        id:4,
        movieName:"무비4",
        score:3
    },
    {
        id:5,
        movieName:"무비5",
        score:4
    },
];
export const getMovies = () => movies; 

export const getById = (id) =>{
    const filterdMovies = movies.filter(movie => movie.id === (id));
    /*filter는 모든 대상을 거친 뒤 해당 조건에 맞는 걸 리턴함.*/
    return filterdMovies[0];
};

export const deleteMovie = id =>{
    const cleanedMovies = movies.filter(movie => movie.id !== (id));
    if(movies.length>cleanedMovies.length){
        movies=cleanedMovies;
        return true;
    }else{
        return false;
    }
};

export const addMovie = (movieName,score) =>{
    const newMovie ={
        score,
        movieName,
        id:`${movies.length+1}`
    };
    movies.push(newMovie);
    return newMovie;
};
