import styles from '../Css/Weather.module.css';
import WeatherCard from './WeatherCard';


function Weather() {
    return (
     <div className={styles.div}>
         <WeatherCard/>
         <WeatherCard/>
         <WeatherCard/>
         <WeatherCard/>
     </div>
    );
  }
  
  export default Weather;