import { Card } from "antd"
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

interface Props {
    id: string;
    title?: string;
    image?: string;
    release_date?: string;
}

const MovieCard:React.FC<Props> = ({
    id,
    title,
    image,
    release_date
}) => {

  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(id)}
    hoverable
    style={{ width: 240 }}
    cover={<img alt="movie" src={image}/>}
  >
    <Meta title={title} description={release_date} />
  </Card>
  )
}

export default MovieCard