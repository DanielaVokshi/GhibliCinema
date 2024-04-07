import { Modal } from "antd";
import Button from "../../common/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReserveModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [numberOfTickets,setNumberOfTickets] = useState<number>(1)
    const navigate = useNavigate()

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
      navigate('/home')
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };



  
    return (
      <>
      <Button label="Reserve a ticket" onClick={showModal}/>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <label htmlFor="Number of tickets:">Number of tickets: </label>
         <input type="number" max={5} min={1} 
          value={numberOfTickets}
          onChange={(e) =>setNumberOfTickets(Number(e.target.value)) }/>


        </Modal>
      </>
    );
}

export default ReserveModal