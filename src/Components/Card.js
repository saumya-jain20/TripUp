import styles from '../Css/Card.module.css';
import p from '../img/plane.jpeg';
function Card() {
    return (
        <div className={styles.div}>
          <img className={styles.img} src={p} alt="Logo" /> 
         <h1 className={styles.h1}>BOOK YOUR TICKETS</h1>
         <p className={styles.p} >
           Leave all the hassle behind and book your<br></br> 
           flights with us to take your travel to another level
         </p>
        </div>
    );
  }
  
  export default Card;