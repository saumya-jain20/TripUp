import Nav from '../Components/Nav';
import styles from '../Css/Delhi.module.css';
import gate from '../img/delhi/gate.png';
import fort from '../img/delhi/fort.png';
import lotus from '../img/delhi/lotus.png';
import minar from '../img/delhi/minar.png';
import Redfort from '../img/delhi/Redfort.png';
import taj from '../img/delhi/taj.png';
import xyz from '../img/delhi/xyz.png';

function Delhi() {
    return (
        <>
        <Nav/>
        <div className={styles.grid}>
            <img src={gate} alt="gate" className={styles.img}/>
            <div className={styles.content}>
                <h1 className={styles.h1} >Delhi</h1>
                <p className={styles.p}>One of the most populous regions in the world – it boasts a population of nearly 20 million people – Delhi is a heady mix of tradition and modernity, and is important as both a religious center and India's busiest international gateway. Its history is as old as the ancient Yamuna River, one of the most sacred rivers in Hinduism and a natural dividing line between New Delhi to the west and Old Delhi to the east.</p>
                <div className={styles.visit}>
                    <h2 className={styles.h2} >Places to visit in Delhi</h2>
                    <div className={styles.gallery}>
                        {/* <div className={styles.container}> 
                            <img className={styles.img} src={p1} alt="Logo" />
                            <div className={styles.middle}>
                            <div className={styles.text}>goa</div>
                            </div>
                        */}
                        <div className={styles.container}> 
                           <img src={fort} alt="fort" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Humayun's Tomb</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={minar} alt="minar" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Qutab Minar</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={lotus} alt="lotus" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Lotus Temple</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={Redfort} alt="Redfort" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Red Fort</div>
                            </div>
                        </div>
                        
                        <div className={styles.container}> 
                        <img src={taj} alt="taj" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Taj Mahal</div>
                            </div>
                        </div>

                        <div className={styles.container}> 
                        <img src={xyz} alt="xyz" className={styles.galimg}/>
                            <div className={styles.middle}>
                                <div className={styles.text}>Lotus Temple</div>
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