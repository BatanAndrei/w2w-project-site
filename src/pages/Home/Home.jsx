import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import LogoSvg from '../../components/Svg/LogoSvg';
import BellHeaderSvg from '../../components/Svg/BellHeaderSvg';


const Home = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headWrapper}>
                    <div className={styles.opacity}></div>
                    <LogoSvg colorPurple={true}/>
                    <BellHeaderSvg/>
                </div>
                <div className={styles.subscribeWrapper}>
                    <Link to='/start-pageLight' className={styles.goStart}>{'<== НА ГЛАВНУЮ'}</Link>
                </div>
                <div className={styles.collabaWeekWrapper}>
                    
                </div>
                <div className={styles.goTestWrapper}>
                    
                </div>
                <div className={styles.sliderArticleWrapper}>

                </div>
                <div className={styles.getBookWrapper}>
                    
                </div>
                <div className={styles.sliderBrandWrapper}>

                </div>
                <div className={styles.connectCommunityWrapper}>
                    
                </div>
                <div className={styles.footerWrapper}>
                    
                </div>
            </div>
        </>
    )
};

export default Home;