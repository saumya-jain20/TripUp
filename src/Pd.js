import Grid from "./Components/Grid";
import Nav from "./Components/Nav";
import styles from "./Css/Pd.module.css";
import HGrid from "./Components/Historic";
import WGrid from "./Components/Weekend";
function Pd() {
    return (   
       <div>
           <Nav/>
           <div className={styles.div}>
           <Grid title="Popular destinations"/>
           <HGrid title="Historic places"/>
           <WGrid title="Weekend getaways"/>
           </div>
      </div>
    );
  }
  
  export default Pd;