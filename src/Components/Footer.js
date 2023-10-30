import styles from '../Css/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
      <div className={styles.div}>
         <footer className={styles.fot}>© Copyright OC. All Rights Reserved</footer>
        <div className={styles.social}>
        <FontAwesomeIcon className={styles.icon} icon={faGithub} size="2x" color='#1F628E'/>
        <FontAwesomeIcon className={styles.icon} icon={faFacebook} size="2x" color='#1F628E'/>
        <FontAwesomeIcon className={styles.icon} icon={faInstagram} size="2x" color='#1F628E'/>
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="2x" color='#1F628E'/>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="2x" color='#1F628E'/>
        </div>
      </div>
    );
  }
  
  export default Footer;