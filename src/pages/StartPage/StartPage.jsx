import styles from './startPage.module.scss';
import LogoSvg from '../../components/Svg/LogoSvg';
import BurgerMunuSvg from '../../components/Svg/BurgerSvg';
import Button from '../../components/Button/Button';
import { nameButtonEnter } from '../../datas/datas';
import PlanetsAndWomenSvg from '../../components/Svg/PlanetsAndWomenSvg';
import Blur1 from '../../components/Svg/Blur1Svg';
import Blur2 from '../../components/Svg/Blur2Svg';
import Blur3 from '../../components/Svg/Blur3Svg';
import Blur4 from '../../components/Svg/Blur4Svg';
import CosmosBottomPage from '../../components/Svg/CosmosBottomPage';
import { nameButtonNeedCollab } from '../../datas/datas';
import MoonStartPageSvg from '../../components/Svg/MoonStartPage';
import GlasSvg from '../../components/Svg/GlasSvg';
import { useNavigate } from "react-router-dom";

const StartPage = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.psevdoModal}></div>
            <div className={styles.logoWrapper}>
                <BurgerMunuSvg className={styles.button} />
                <LogoSvg colorWhite={true}/>
                <Button click={() => navigate('/signUp-create')} className={styles.button+' '+styles.colorButton} name={nameButtonEnter} />
            </div>
            <div className={styles.generalInfoPageWrapper}>
                <h1 className={styles.title}>СЕРВИС<br/> КОЛЛАБОРАЦИЙ<br/> ДЛЯ БРЕНДОВ </h1>
                <h2 className={styles.subtitle}>Объединяем бренды по ценностям<br/> 
                и помогаем предпринимательницам<br/> делать <span className={styles.wordRed}>коллабы</span> для роста бизнеса</h2>
                <div className={styles.buttonWrapper}>
                    <div className={styles.briliant}>
                </div>
                    <Button click={() => navigate('/signUp-create')} name={nameButtonNeedCollab} className={styles.buttonCollabs+' '+styles.ripple} />
                    <Button name='TEST' className={styles.buttonCollabs+' '+styles.ripple} />
                </div>
                <div className={styles.blur1}>
                    <Blur1 />
                </div>
                <div className={styles.moon}>
                    <MoonStartPageSvg />
                </div>
                <div className={styles.glas}>
                    <GlasSvg />
                </div>
            </div>
            <div className={styles.planetAndWomenWrapper}>
                <div className={styles.blur2}>
                    <Blur2 />
                </div>
                <div className={styles.blur3}>
                    <Blur3 />
                </div>
                <div className={styles.blur4}>
                    <Blur4 />
                </div>
                <div className={styles.PlanetsAndWomenPicture}>
                    <PlanetsAndWomenSvg />
                </div>
                <div className={styles.cosmosBottomPage}>
                    <CosmosBottomPage />
                </div>
            </div>
        </div>
    )
};

export default StartPage;