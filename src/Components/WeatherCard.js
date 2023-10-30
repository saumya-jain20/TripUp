import a from '../img/1.png';
import b from '../img/2.png';
import c from '../img/3.png';
import d from '../img/4.png';
import e from '../img/5.png';
import f from '../img/6.png';
import styles from '../Css/WeatherCard.module.css';

function WeatherCard(props) {

    return (
     <div>
         <div className={styles.div}>
            <img className={styles.img} src={a} alt="icon" />
            <h2 className={styles.h2}>date</h2>
         </div>
     </div>
    //  src={`../img/${img.code}.jpg`}

    );
  }
  
  export default WeatherCard;