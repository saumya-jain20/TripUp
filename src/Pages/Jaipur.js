import Nav from '../Components/Nav';
import styles from '../Css/Mumbai.module.css';
import gate from '../img/jaipur/hawa.jpeg';
import BMC from '../img/jaipur/jal.jpeg';
import budha from '../img/jaipur/amber.jpeg';
import xyz from '../img/jaipur/nfort.jpeg';

function Jaipur() {
    return (
        <>
        <Nav/>
        <div className={styles.grid}>
            <img src={gate} alt="gate" className={styles.img}/>
            <div className={styles.content}>
                <h1 className={styles.h1} >Jaipur</h1>
                <p className={styles.p}>Jaipur, city, capital of Rajasthan state, northwestern India. It is situated in the east-central part of the state, roughly equidistant from Alwar (northeast) and Ajmer (southwest). It is Rajasthan’s most-populous city.
                Jaipur is also known as the Pink City, due to the dominant colour scheme of its buildings. It is also known as the Paris of India.
                </p>
                <div className={styles.visit}>
                    <h2 className={styles.h2} >Places to visit in Mumbai</h2>
                    <div className={styles.gallery}>

                        <div className={styles.container}> 
                        <img src={budha} alt="budha" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Amber Mahal</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={BMC} alt="BMC" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Jal Mhal</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={gate} alt="gate" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Hawa mahal</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={xyz} alt="xyz" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Naharghar Fort</div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Jaipur;