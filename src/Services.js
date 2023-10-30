import styles from './Services.module.css';
import Nav from './Components/Nav';
import Card from './Components/Card';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';

function Services() {
  return (
    <div>
      <Nav/>
      <div className={styles.div}>
      <div className={styles.grid}>
        <Card/>
        <Card1/>
        <Card2/>
      </div>
      </div>
    </div>
  );
}

export default Services;
