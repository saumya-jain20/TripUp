import styles from '../Css/Pd.module.css';
import Grid from './Grid';
import HGrid from "./Historic";
import WGrid from "./Weekend";

function Ng() {
    return (
      <div className={styles.div}>
        <Grid title="Popular destinations"/>
        <HGrid title="Historic places"/>
        <WGrid title="Weekend getaways"/>
        {/* <Grid title="Hotels"/> */}
      </div>    
    );
  }
  
  export default Ng;