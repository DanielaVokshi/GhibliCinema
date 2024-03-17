import { useEffect, useState } from "react"
import { MovieType } from "../types"
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from "../api";
import MovieDesciption from "../components/MovieDescription/MovieDesciption";
import PopularMovies from "../components/PopularMovies/PopularMovies";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState<MovieType>();
    const { id }  = useParams();

    useEffect( () => {
        const gotSingleMovie = async() => {
            const gotMovie = await fetchSingleMovie(id)
            setMovieDetails(gotMovie)
        }
        if(!movieDetails){
            gotSingleMovie();
        }
    },[movieDetails, id])
    console.log(id);
    

  return (
    <>
    <MovieDesciption  movieTitle ={movieDetails?.title}
    movieOriginalTitle ={movieDetails?.original_title}
    movieImage ={movieDetails?.image}
    movieBanner={movieDetails?.movie_banner}
    movieDescription ={movieDetails?.description}
    movieDirector ={movieDetails?.director}
    movieReleaseDate ={movieDetails?.release_date}
    movieRunningTime ={movieDetails?.running_time}
    movieRating ={movieDetails?.rt_score}
    moviePrice = "700 ALL"
    />
    <PopularMovies title="Most popular movies"/>
    </>
  )
}

export default MovieDetails;