import styles from "../Css/Features.module.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
function Features() {
  const [isChecked, setIsChecked] = useState(false);
    return (
     <div className={styles.div}>
          <ul className={styles.ul} >
            <input className={styles.input} type="checkbox"  onChange={(event) => setIsChecked(event.currentTarget.checked)}checked={isChecked} id="checkbox_toggle" />
            <FontAwesomeIcon onClick={() => setIsChecked(!isChecked)} className={styles.hamburger} icon={faBars} size="lg" color='#306079'/>
            <div className={styles.menu}>
            
            <a target='_blank' href="https://www.cleartrip.com/flights?utm_source=google&utm_medium=cpc&utm_campaign=Gen:High-Conv_Exact-DeskTab&dxid=CjwKCAiAprGRBhBgEiwANJEY7PbwNb3jMrJ4XkIW0_I7euXq7P2H-hz6i8Idiinzv3TgNUxZDzSXExoCVpEQAvD_BwE&gclid=CjwKCAiAprGRBhBgEiwANJEY7PbwNb3jMrJ4XkIW0_I7euXq7P2H-hz6i8Idiinzv3TgNUxZDzSXExoCVpEQAvD_BwE">
            <li className={styles.rotate} >Flights </li>
            </a>
            <Link className={styles.link} to="/Search/ng">
            <li className={styles.rotate} >Getaways</li>
            </Link>
            <Link className={styles.link} to="/Search/Hotel">
            <li className={styles.rotate} >Hotels</li>
            </Link>
            {/* <Link className={styles.link} to="/Search/Weather"> */}
            <a target='_blank' href="https://www.weather-forecast.com/">
            <li className={styles.rotate} >Weather forecast</li>
            </a>
            {/* </Link>       */}
            </div>      
        </ul>
     </div>
    );

  }
  
  export default Features;
  