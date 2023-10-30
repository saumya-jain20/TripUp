import styles from '../Css/Pd.module.css';
import Grid from './HHotels';
import HGrid from './HHotel1';
// import WGrid from './HHotel2';
function Hotel() {
    return (
      <div className={styles.div}>
        <HGrid title="Mumbai"/>
        <Grid title="Goa"/>
        

        {/* <HGrid title="Mumbai"/>
        <WGrid title="Delhi"/> */}
      </div>    
    );
  }
  
  export default Hotel;