import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
        <Footer container>
      <Footer.Copyright href="#" by="Flowbite™" year={2024} />
      <Footer.LinkGroup>
      <Link to={'home'}>Home</Link>
        <Link to={'tickets'}>My tickets</Link>
        <Link to={'likes'}>Likes</Link>
      </Footer.LinkGroup>
    </Footer>
    )
}

export default FooterComponent;