//Query를 resolve 
import {getById,getMovies,addMovie, deleteMovie} from "./db";


const  resolvers= {
    Query:{
        movies: () => getMovies() ,
        movie: (_,{id}) => getById(id)    
    },
    Mutation:{
        addMovie: (_,{movieName,score}) => addMovie(movieName,score),
        deleteMovie : (_,{id}) => deleteMovie() 
    }
};

export default resolvers;