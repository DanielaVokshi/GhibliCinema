import { Link } from "react-router-dom";
import styles from './NavbarComponent.module.css'
import { Input } from "antd";


const NavbarComponent = () => {
  return (
   <>
   <nav className={styles.navbarStyle}>
      <div className={styles.leftSide}>
        <h4>Ghibli Cinema</h4>
        <Link to={'home'}>Home</Link>
        <Link to={'tickets'}>My tickets</Link>
        <Link to={'likes'}>Likes</Link>
      </div>
      <div className={styles.rightSide}>
        <Input placeholder="Search a movie" className={styles.searchInput} />
      </div>
   </nav>
   </>
   
  )
}

export default NavbarComponent;