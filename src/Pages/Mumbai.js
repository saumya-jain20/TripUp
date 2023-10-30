import Nav from '../Components/Nav';
import styles from '../Css/Mumbai.module.css';
import gate from '../img/mumbai/gateway.png';
import fort from '../img/mumbai/gate.png';
import BMC from '../img/mumbai/BMC.png';
import budha from '../img/mumbai/budha.png';
import Y from '../img/mumbai/Y.png';
import xyz from '../img/mumbai/X.png';

function Delhi() {
    return (
        <>
        <Nav/>
        <div className={styles.grid}>
            <img src={gate} alt="gate" className={styles.img}/>
            <div className={styles.content}>
                <h1 className={styles.h1} >Mumbai</h1>
                <p className={styles.p}>Mumbai, the city where dreams are made and fulfilled! From jam-packed railway platforms to the famous Dabbawalas, multi-millionaires to suburban slums, the dazzling Bollywood to the quintessential vada pav, bhel puri, and sev puri, the uniqueness of Mumbai is beyond words. If you are planning a trip to Mumbai, make sure you visit the right places to imbibe the dynamic effervescence of this city. To help you with that, we have listed down some of the amazing places visit in Mumbai, which will make you fall in love with this extravagant city over and over again.</p>
                <div className={styles.visit}>
                    <h2 className={styles.h2} >Places to visit in Mumbai</h2>
                    <div className={styles.gallery}>

                        <div className={styles.container}> 
                        <img src={budha} alt="budha" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Elephanta Caves</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={BMC} alt="BMC" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>BMC</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={gate} alt="gate" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>India Gate</div>
                            </div>
                        </div>
                        
                        {/* <div className={styles.container}> 
                        <img src={Y} alt="Y" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Y Mahal</div>
                            </div>
                        </div> */}

                        <div className={styles.container}> 
                        <img src={xyz} alt="xyz" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Taj Mahal Palace</div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Delhi;