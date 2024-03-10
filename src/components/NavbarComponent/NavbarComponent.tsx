import { Link } from "react-router-dom";
import styles from './NavbarComponent.module.css'
import { Input } from "antd";


const NavbarComponent = () => {
  return (
   <nav className={styles.navbarStyle}>
      <div className={styles.leftSide}>
        <h4> <Link to={'/'} className={styles.link}>Ghibli Cinema</Link></h4>
        <Link to={'home'} className={styles.link}>Home</Link>
        <Link to={'tickets'} className={styles.link}>My tickets</Link>
        <Link to={'likes'} className={styles.link}>Likes</Link>
      </div>
      <div className={styles.rightSide}>
        <Input placeholder="Search a movie" className={styles.searchInput} />
      </div>
   </nav>
  )
}

export default NavbarComponent;