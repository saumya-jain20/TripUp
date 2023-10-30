import Form from './Components/Form';
import Nav from './Components/Nav';
import styles from './Home.module.css'
import Footer from './Components/Footer';

function Home() {
  return (   
    
     <div>
       <Nav/>
     <div className={styles.div}>
        <Form/>
        <div className={styles.main}>
        </div> 
        <Footer/>      
      </div>   
      
    </div>
  );
}

export default Home;
