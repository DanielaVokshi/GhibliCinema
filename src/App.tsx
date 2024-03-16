import { Outlet } from "react-router-dom";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import './App.css'
import './css variables/variables.css'

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
