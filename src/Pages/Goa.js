import Nav from '../Components/Nav';
import styles from '../Css/Mumbai.module.css';
import gate from '../img/GOA/beach.jpeg';
import BMC from '../img/GOA/Church.jpeg';
import budha from '../img/GOA/falls.jpeg';
import xyz from '../img/GOA/jessus.jpeg';

function Goa() {
    return (
        <>
        <Nav/>
        <div className={styles.grid}>
            <img src={gate} alt="gate" className={styles.img}/>
            <div className={styles.content}>
                <h1 className={styles.h1} >Goa</h1>
                <p className={styles.p}>Goa is a land of amazing contrasts. Of tangible and intangible heritage; of human endeavour and natural wonders; of music and stillness. No other place in the world lets you discover 
                so many worlds in the space of a few hours: outside you and inside you!
                Flanked by the Arabian Sea on the West and the imposing Sahyadri mountains on the East, the Goan landscape rises from sea-level to a towering 1022 metres. Several rivers crisscross the state and add to its natural beauty.</p>
                <div className={styles.visit}>
                    <h2 className={styles.h2} >Places to visit in Mumbai</h2>
                    <div className={styles.gallery}>

                        <div className={styles.container}> 
                        <img src={budha} alt="budha" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Dudhsagar Falls</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={BMC} alt="BMC" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Church</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={gate} alt="gate" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Utorda beach</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={xyz} alt="xyz" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Bassilica</div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Goa;