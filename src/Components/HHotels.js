import p1 from '../img/Hotels/Goa/Aarju.jpg';
import p2 from '../img/Hotels/Goa/aurum.jpg';
import p3 from '../img/Hotels/Goa/amour.jpg';
import p4 from '../img/Hotels/Goa/foothills.jpg';
import p5 from '../img/Hotels/Goa/goa-casa-aluizio.jpg';
import p6 from '../img/Hotels/Goa/Le-Gracia.jpg';
import p7 from '../img/Hotels/Goa/Garden.jpg';
import p8 from '../img/Hotels/Goa/Sonesta.jpg';
import styles from '../Css/Grid.module.css';

function HoGrid(props) {
    return (   
       <div className={styles.div}>
           <a target='_blank' href='https://www.booking.com/region/in/goa.en.html?aid=324798;label=goa-ZeZjr8EI44AA*FPJ9u*FqgS319455830553:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-25100501:lp9040232:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcWHiCDB7igB8XpJKYgu4TM;ws=&gclid=CjwKCAiAprGRBhBgEiwANJEY7N-PFnY53lkhXjMRcEZue7FCUzuQItwHmsX-VQ1sBL3pjwJNXFfscxoCQLgQAvD_BwE'>
           <h1 className={styles.h1}>{props.title}</h1>
           </a>
           <div className={styles.grid}>

           <div className={styles.container}> 
            <img className={styles.img} src={p4} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>foothills</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p1} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Aarju</div>
            </div>
           </div> 

           <div className={styles.container}>
            <img className={styles.img} src={p2} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Aurum</div>
            </div>
           </div>  

           <div className={styles.container}> 
            <img className={styles.img} src={p3} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>De Amour</div>
            </div>
           </div> 

           <div className={styles.container}> 
              <img className={styles.img} src={p5} alt="Logo" />
              <div className={styles.middle}>
               <div className={styles.text}>goa-casa-aluizio</div>
              </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p6} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Le Gracia</div>
            </div>
           </div> 

           <div className={styles.container}> 
            <img className={styles.img} src={p7} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Saxony Garden</div>
            </div>
           </div>

           <div className={styles.container}> 
            <img className={styles.img} src={p8} alt="Logo" />
            <div className={styles.middle}>
             <div className={styles.text}>Sonesta</div>
            </div>
           </div> 

           </div>
      </div>
    );
  }
  
  export default HoGrid;