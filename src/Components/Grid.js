import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';
import p5 from '../img/City/Ladakh.jpeg';
import p6 from '../img/City/Shimla.jpeg';
import p7 from '../img/City/udaipurr.jpeg';
import p8 from '../img/City/aurangabad.jpeg';
import styles from '../Css/Grid.module.css';
import { Link } from 'react-router-dom';

function Grid(props) {
    return (   
       <div className={styles.div}>
           <h1 className={styles.h1}>{props.title}</h1>
           <div className={styles.grid}>

           <div className={styles.container}> 
           <Link className={styles.link} to="/Delhi"> 
            <img className={styles.img} src={p4} alt="Logo" />
            </Link>
            <div className={styles.middle}>
             <div className={styles.text}>Delhi</div>
            </div>
           </div> 

           <div className={styles.container}> 
           <Link className={styles.link} to="/Goa"> 
            <img className={styles.img} src={p1} alt="Logo" />
            </Link>
            <div className={styles.middle}>
             <div className={styles.text}>Goa</div>
            </div>
           </div> 

           <div className={styles.container}>
            <Link className={styles.link} to="/Mumbai"> 
            <img className={styles.img} src={p2} alt="Logo" />
            </Link>
            <div className={styles.middle}>
             <div className={styles.text}>Mumbai</div>
            </div>
           </div>  

           <div className={styles.container}> 
           <Link className={styles.link} to="/Jaipur"> 
            <img className={styles.img} src={p3} alt="Logo" />
            </Link>
            <div className={styles.middle}>
             <div className={styles.text}>Jaipur</div>
            </div>
           </div> 

           <div className={styles.container}> 
              <img className={styles.img} src={p5} alt="Logo" />
              <div className={styles.middle}>
               <div className={styles.text}>Ladakh</div>
              </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p6} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Shimla</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p7} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Udaipur</div>
            </div>
           </div>

           <div className={styles.container}> 
            <img className={styles.img} src={p8} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Aurangabad</div>
            </div>
           </div> 

           </div>
      </div>
    );
  }
  
  export default Grid;