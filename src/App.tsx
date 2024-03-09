import { Outlet } from "react-router-dom";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

const  App = () => {
  return( 
  <>
  <NavbarComponent />
  <Outlet />
  <FooterComponent />
  </>
  )
}

export default App;
