import { Card } from 'antd'
import { Dispatch, SetStateAction } from 'react';

interface Props {
 title: string;
 totalPrice: number;
 numberOfTickets: number
}

const ReservationCard:React.FC<Props> = ({
    title,
    numberOfTickets,
    totalPrice
}) => {
  return (
    <Card type="inner" title={title} >
      <p>Number of Tickets: {numberOfTickets}</p>
      <p>Total Price: {totalPrice}</p>
    </Card>
  )
}

export default ReservationCard