import styles from './startPageLight.module.scss';
import LogoSvg from '../../components/Svg/LogoSvg';
import BurgerMunuSvg from '../../components/Svg/BurgerSvg';
import Button from '../../components/Button/Button';
import { nameButtonEnter } from '../../datas/datas';
import PlanetsAndWomenSvg from '../../components/Svg/PlanetsAndWomenSvg';
import CosmosBottomPage from '../../components/Svg/CosmosBottomPage';
import { nameButtonNeedCollab } from '../../datas/datas';
import { useNavigate } from "react-router-dom";
import DescktopViewComponent from '../DescktopView/DescktopViewComponent';
import SatartPageLightPlanetsSvg from '../../components/Svg/SatartPageLightPlanetsSvg';


const StartPageLight = () => {

    const navigate = useNavigate();

    const awaitTimeMoveToLink = () => {
        setTimeout(() => {navigate('/signUp-create')}, 1000);
    };

    return (
        <>
        <div className={styles.containerDescktop}>
            <DescktopViewComponent/>
        </div>
        <div className={styles.container}>
            <div className={styles.psevdoModal}></div>
            <div className={styles.logoWrapper}>
                <BurgerMunuSvg purple={true} className={styles.button} />
                <LogoSvg colorPurple={true}/>
                <Button click={() => navigate('/signIn')} className={styles.button+' '+styles.colorButton} name={nameButtonEnter} />
            </div>
            <div className={styles.generalInfoPageWrapper}>
                <h1 className={styles.title}>СЕРВИС<br/> КОЛЛАБОРАЦИЙ<br/> ДЛЯ БРЕНДОВ </h1>
                <h2 className={styles.subtitle}>Объединяем бренды по ценностям<br/> 
                и помогаем предпринимательницам<br/> делать <span className={styles.wordPurple}>коллабы</span> для роста бизнеса</h2>
                <div className={styles.buttonWrapper}>
                    <Button click={awaitTimeMoveToLink} name={nameButtonNeedCollab} className={styles.buttonCollabs+' '+styles.ripple} />
                </div>
            </div>
            <div className={styles.planetAndWomenWrapper}>
                <SatartPageLightPlanetsSvg/>
            </div>
        </div>
        </>
    )
};

export default StartPageLight;