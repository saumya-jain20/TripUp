import { Link } from 'react-router-dom';
import styles from '../Css/Error404.module.css'


function Error404() {
    
    return (
        <div className={styles.bod}>
        <div className={styles.txt}>
        <h1 className={styles.h1}>
            404_
        </h1>
        <p className={styles.p}>
            YOU'RE BEYOND THE BORDERS <br/>
            <Link to='/' >
                <button className={styles.button} >REROUTE</button>
            </Link>
        </p>
        </div>
       </div>
    );
  }
  
  export default Error404;