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

const StartPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.psevdoModal}></div>
            <div className={styles.logoWrapper}>
                <BurgerMunuSvg className={styles.button} />
                <LogoSvg colorWhite={true}/>
                <Button className={styles.button+' '+styles.colorButton} name={nameButtonEnter} />
            </div>
            <div className={styles.generalInfoPageWrapper}>

            </div>
            <div className={styles.planetAndWomenWrapper}>
                <di className={styles.blur2}>
                    <Blur2 />
                </di>
                <di className={styles.blur3}>
                    <Blur3 />
                </di>
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