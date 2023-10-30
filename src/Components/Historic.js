import p1 from '../img/Historic/gwalior.jpeg';
import p2 from '../img/Historic/hampi.jpeg';
import p3 from '../img/Historic/mysore.jpeg';
import p4 from '../img/Historic/qutub.jpeg';
import p5 from '../img/Historic/sun.jpeg';
import p6 from '../img/Historic/taj.jpeg';
import p7 from '../img/Historic/victoria.jpeg';
import styles from '../Css/Grid.module.css';

function HGrid(props) {
    return (   
       <div className={styles.div}>
           <h1 className={styles.h1}>{props.title}</h1>
           <div className={styles.grid}>

           <div className={styles.container}> 
            <img className={styles.img} src={p4} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Qutub Minar</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p1} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Gwalior fort</div>
            </div>
           </div> 

           <div className={styles.container}>
            <img className={styles.img} src={p2} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Ruins of Hampi</div>
            </div>
           </div>  

           <div className={styles.container}> 
            <img className={styles.img} src={p3} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Mysore palace</div>
            </div>
           </div> 

           <div className={styles.container}> 
              <img className={styles.img} src={p5} alt="Logo" />
              <div className={styles.middle}>
               <div className={styles.text}>Sun temple konark</div>
              </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p6} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Taj Mahal</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p7} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Victoria Memorial</div>
            </div>
           </div>

           {/* <div className={styles.container}> 
            <img className={styles.img} src={p3} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Jaipur</div> */}
            {/* </div>
           </div>  */}

           </div>
      </div>
    );
  }
  
  export default HGrid;