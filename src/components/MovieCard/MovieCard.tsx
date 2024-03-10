import { Card } from "antd"

const { Meta } = Card;

interface Props {
    id: string;
    title: string;
    image: string;
    release_date: string;
}

const MovieCard:React.FC<Props> = ({
    title,
    image,
    release_date
}) => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="movie" src={image}/>}
  >
    <Meta title={title} description={release_date} />
  </Card>
  )
}

export default MovieCard