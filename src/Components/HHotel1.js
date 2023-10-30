import p1 from '../img/Hotels/Mumbai/Carlton-hotel.jpg';
import p2 from '../img/Hotels/Mumbai/Four-seasons-hotel-mumbai.jpg';
import p3 from '../img/Hotels/Mumbai/hotel-kemps-corner.jpg';
import p4 from '../img/Hotels/Mumbai/hotel-sea-princess.jpg';
import p5 from '../img/Hotels/Mumbai/Royal-hometel-suites.jpg';
import p6 from '../img/Hotels/Mumbai/The-fern.jpg';
import p7 from '../img/Hotels/Mumbai/the-leela-mumbai.jpg';
import p8 from '../img/Hotels/Mumbai/thee-taj-mahal-tower-mumbai.jpg';
import styles from '../Css/Grid.module.css';

function HoGrid(props) {
    return (   
       <div className={styles.div}>
           <a target='_blank' href='https://www.booking.com/city/in/bombay.en.html?aid=306395;label=bombay-ojXiksgy7PQEP4LUUIOBsgS392865644581:pl:ta:p1480:p2:ac:ap:neg:fi:tikwd-25100521:lp9040232:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c;ws=&gclid=CjwKCAiAprGRBhBgEiwANJEY7NnQARbsuOc-WKhDRM3B2zhSw_cqKnUDS2lHFsMK-uEfv053QnPOOBoCPq0QAvD_BwE'>
           <h1 className={styles.h1}>{props.title}</h1>
           </a>
           <div className={styles.grid}>

           <div className={styles.container}> 
            <img className={styles.img} src={p4} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Sea princess</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p1} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Carlton hotel</div>
            </div>
           </div> 

           <div className={styles.container}>
            <img className={styles.img} src={p2} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Four seasons</div>
            </div>
           </div>  

           <div className={styles.container}> 
            <img className={styles.img} src={p3} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Kemps corner</div>
            </div>
           </div> 

           <div className={styles.container}> 
              <img className={styles.img} src={p5} alt="Logo" />
              <div className={styles.middle}>
               <div className={styles.text}>Royal hometel suites</div>
              </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p6} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>The fern</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p7} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>The Leela</div>
            </div>
           </div>

           <div className={styles.container}> 
            <img className={styles.img} src={p8} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Taj mahal tower</div>
            </div>
           </div> 

           </div>
      </div>
    );
  }
  
  export default HoGrid;