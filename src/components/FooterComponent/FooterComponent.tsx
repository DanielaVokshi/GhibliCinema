import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import styles from './/FooterComponent.module.css'

const FooterComponent = () => {

  

    return (
      <Footer  bgDark container className={styles.footerContainer}>
        <Footer.Copyright href="#" by="" year={2024} className={styles.footerLinks}/>
          <div className={styles.linkGroup}>
            <Link to={'home'} className={styles.footerLinks}>Home</Link>
            <Link to={'tickets'} className={styles.footerLinks}>My tickets</Link>
            <Link to={'likes'} className={styles.footerLinks}>Likes</Link>
          </div>
      </Footer>
    )
}

export default FooterComponent;