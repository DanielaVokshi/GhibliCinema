import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import styles from './FooterComponent.module.css'

const FooterComponent = () => {

  

    return (
      <>
      <Footer.Divider className={styles.footerDivider}/>
      <div className={styles.footerContainer}>
      <Footer.Copyright className={styles.footerLinks} href="#" by="" year={2024} />
      <div className={styles.linkGroup}>
        <Footer.Icon className={styles.footerLinks} href="#" icon={BsFacebook} />
        <Footer.Icon className={styles.footerLinks} href="#" icon={BsInstagram} />
        <Footer.Icon className={styles.footerLinks} href="#" icon={BsTwitter} />
        <Footer.Icon className={styles.footerLinks} href="#" icon={BsGithub} />
        <Footer.Icon className={styles.footerLinks} href="#" icon={BsDribbble} />
      </div>
    </div>
      </>
    )
}

export default FooterComponent;