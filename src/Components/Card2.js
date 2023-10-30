import styles from '../Css/Card.module.css';
import p from '../img/more.jpeg';

function Card2() {
    return (
        <div className={styles.div}>
          <img className={styles.img} src={p} alt="Logo" /> 
         <h1 className={styles.h1}>Tell you about the places you travel</h1>
         <p className={styles.p} >
          Know what you explore with the help of us to get <br></br>
          first-hand experience by feeling like a local
         </p>
        </div>
    );
  }
  
  export default Card2;