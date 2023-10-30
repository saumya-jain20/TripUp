import styles from '../Css/Card.module.css';
import p from '../img/hotel.png';
function Card1() {
    return (
        <div className={styles.div}>
          <img className={styles.img} src={p} alt="Logo" /> 
         <h1 className={styles.h1}>BOOK YOUR HOTELS</h1>
         <p className={styles.p} >
            Lie on your back and have top notch experience of <br></br>
            your trip by booking your hotel rooms with us
         </p>
        </div>
    );
  }
  
  export default Card1;