import { MovieType } from '../../types';
import { fetchAllMovies } from '../../api';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselData from '../CarouselData/CarouselData';
import styles from './CarouselComponent.module.css'

const CarouselComponent = () => {
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

    const renderSlides = moviesData?.map((movie) => (
        <CarouselData image={movie.image}/>
    )).slice(0,8)

  return (
    <div className={styles.container}>
        <h1 className={styles.header}>Latest Releases</h1>
            <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            className="carousel-container"
        >
            {renderSlides}
        </Carousel>
  </div>
  )
}

export default CarouselComponent;