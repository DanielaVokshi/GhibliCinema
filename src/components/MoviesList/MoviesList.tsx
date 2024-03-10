import { useEffect, useState } from "react"
import { MovieType } from "../../types"
import { fetchAllMovies } from "../../api";
import MovieCard from "../MovieCard/MovieCard";
import styles from './MoviesList.module.css'

const MoviesList = () => {
  
    const [moviesData, setMoviesData] = useState<MovieType[]>();

    useEffect( () => {
        const getMoviesData = async () => {
            const data = await fetchAllMovies();

            setMoviesData(data);
        }

        if(!moviesData){
            getMoviesData();
        }
    }, [moviesData])

    return(
        <div className={styles.movieContainer}>
            {
                moviesData?.map((movie) => (
                    <MovieCard key={movie.id} 
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    release_date={movie.release_date}
                    />
                ))
            }
        </div>
    )
}

export default MoviesList