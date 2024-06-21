import styles from './deacktopView.module.scss';
import LogoDescktop from '../../components/Svg/LogoDescktop';
import Blur1 from '../../components/Svg/Blur1Svg';
import Blur2blueDescktop from '../../components/Svg/Blur2blueDescktop';
import Blur3 from '../../components/Svg/Blur3Svg';
import Blur4Descktop from '../../components/Svg/Blur4Descktop';
import CosmosDescktopSvg from '../../components/Svg/CosmosDescktopSvg';
import GlasDescktopSvg from '../../components/Svg/GlasDescktopSvg';
import MoonDescktopSvg from '../../components/Svg/MoonDescktopSvg';


const DescktopViewComponent = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperHeader}>
                <LogoDescktop/>
            </div>
            <div className={styles.description}>
                <h1 className={styles.title}>СКОРО СЕРВИС<br/> КОЛЛАБОРАЦИЙ БУДЕТ<br/> НА ВСЕХ ЭКРАНАХ</h1>
                <h2 className={styles.subTitle}>А пока зайдите к нам с <span className={styles.span}>мобильного телефона</span></h2>
            </div>
            <div className={styles.woolfAnimation}></div>
            <div className={styles.blur1}>
                <Blur1/>
            </div>
            <div className={styles.blur2}>
                <Blur2blueDescktop/>
            </div>
            <div className={styles.blur3}>
                <Blur3/>
            </div>
            <div className={styles.blur4}>
                <Blur4Descktop/>
            </div>
            <div className={styles.moon}>
                <MoonDescktopSvg/>
            </div>
            <div className={styles.glas}>
                <GlasDescktopSvg/>
            </div>
            <div className={styles.cosmos}>
                <CosmosDescktopSvg/>
            </div>
        </div>
    )
};

export default DescktopViewComponent;