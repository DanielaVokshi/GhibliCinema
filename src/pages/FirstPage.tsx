import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import Information from "../components/Information/Information";
import PopularMovies from "../components/PopularMovies/PopularMovies";

const FirstPage = () => {
  return (
    <>
       <CarouselComponent />
       <Information />
       <PopularMovies title="Most Popular Movies"/>
    </>
       
  )
}

export default FirstPage;