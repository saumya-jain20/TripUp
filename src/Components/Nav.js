// import logo from '../logo.svg';
import logo from '../img/send.png';
import styles from '../Css/Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.navbar} id="nav">
      <div className={styles.left} id='left'>
        <img className={styles.img} src={logo} alt="Logo" />
        <h1 className={styles.h1}>Trip Up</h1>
      </div>
      <div id='right'>
        <ul className={styles.ul} >
            <input className={styles.input} type="checkbox"  onChange={(event) => setIsChecked(event.currentTarget.checked)}checked={isChecked} id="checkbox_toggle" />
            <FontAwesomeIcon onClick={() => setIsChecked(!isChecked)} className={styles.hamburger} icon={faBars} size="lg" color='#306079'/>
            <div className={styles.menu}>
              <Link className={styles.link} to="/binary_brains"> 
              <li className={styles.rotate} >Home</li>
              </Link>
              <Link className={styles.link} to="/Services">
              <li className={styles.rotate} >Services</li>
              </Link>
              <Link className={styles.link} to="/Pd">
              <li className={styles.rotate} >Destinations</li>
              </Link>
              <li className={styles.li} >
              <div className={styles.search} id='search' >
                  <input className={styles.input}  type="text" placeholder="" />
                  <FontAwesomeIcon icon={faSearch} size="lg" color='#306079'/>
              </div>
              </li>
            </div>
            {/* <Link className={styles.link} to="/">
            <li className={styles.rotate} >Contact Us</li>
            </Link>             */}
           <Link className={styles.link} to="/Login">
              <li  className={styles.user} ><FontAwesomeIcon icon={faUserCircle} size="2x" color='#306079'/></li>
           </Link>
        </ul>
      </div>
    </div>
  );
}


export default Nav;
