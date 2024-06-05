import styles from './home.module.scss';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <>
            <div className={styles.headWrapper}>
                <Link to='/signUp-create/confirm-phone'>НАЗАД к проверочному номеру</Link>
            </div>
            <div className={styles.trackerWrapper}>
                
            </div>
            <div className={styles.sliderWrapper}>
                
            </div>
            <div className={styles.sliderPartnersWrapper}>
                
            </div>
            <div className={styles.wrapperTitlePartners}><h2 className={styles.titlePartners}>Лучшие партнёры</h2></div>
            <div className={styles.collabsWrapper}>
                
            </div>
            <div className={styles.wrapperTitleCollaba}><h2 className={styles.titleCollaba}>Коллаба недели</h2></div>
            <div className={styles.footerWrapper}>
                
            </div>
        </>
    )
};

export default Home;