import p1 from '../img/Weekend/pondicherry.jpeg';
import p2 from '../img/Weekend/dhanaulti.jpeg';
import p3 from '../img/Weekend/gokarna.jpeg';
import p4 from '../img/Weekend/kasauli.jpeg';
import p5 from '../img/Weekend/lansdowne.jpeg';
import p6 from '../img/Weekend/lonavala.jpeg';
import p7 from '../img/Weekend/chail.jpeg';
import styles from '../Css/Grid.module.css';

function WGrid(props) {
    return (   
       <div className={styles.div}>
           <h1 className={styles.h1}>{props.title}</h1>
           <div className={styles.grid}>

           <div className={styles.container}> 
            <img className={styles.img} src={p4} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Kasauli</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p1} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Pondicherry</div>
            </div>
           </div> 

           <div className={styles.container}>
            <img className={styles.img} src={p2} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Dhanaulti</div>
            </div>
           </div>  

           <div className={styles.container}> 
            <img className={styles.img} src={p3} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Gokarna</div>
            </div>
           </div> 

           <div className={styles.container}> 
              <img className={styles.img} src={p5} alt="Logo" />
              <div className={styles.middle}>
               <div className={styles.text}>Lansdowne</div>
              </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p6} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Lonavala</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p7} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Chail</div>
            </div>
           </div>

           {/* <div className={styles.container}> 
            <img className={styles.img} src={p3} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Jaipur</div>
            </div>
           </div>  */}

           </div>
      </div>
    );
  }
  
  export default WGrid;