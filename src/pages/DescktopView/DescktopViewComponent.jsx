import styles from './deacktopView.module.scss';
import LogoDescktop from '../../components/Svg/LogoDescktop';


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
        </div>
    )
};

export default DescktopViewComponent;