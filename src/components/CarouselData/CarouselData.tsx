import styles from './CarouselData.module.css'

interface Props {
    image: string;
}

const CarouselData:React.FC<Props>= ({image}) => {
  return (
    <img src={image} alt=""  className={styles.carouselImage}/>
  )
}

export default CarouselData