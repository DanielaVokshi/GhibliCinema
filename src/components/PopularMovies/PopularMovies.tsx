import { useState, useEffect } from "react";
import { fetchAllMovies } from "../../api";
import { MovieType } from "../../types";
import MovieCard from "../MovieCard/MovieCard";
import styles from './PopularMovies.module.css';

interface Props {
    title: string;
}

const PopularMovies:React.FC<Props> = ({title}) => {

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
    console.log(moviesData);
    
  return (
    <>
    <h1 className={styles.header}>{title}</h1>
    <div className={styles.popularMoviesContainer}>
         {
                moviesData?.map((movie) => (
                    <MovieCard key={movie.id} 
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    release_date={movie.release_date}
                    />
                )).slice(5,10)
            }
    </div>
    </>
  )
}

export default PopularMovies;