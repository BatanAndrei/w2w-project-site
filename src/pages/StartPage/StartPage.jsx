import styles from './startPage.module.scss';
import LogoSvg from '../../components/Svg/LogoSvg';
import BurgerMunuSvg from '../../components/Svg/BurgerSvg';
import Button from '../../components/Button/Button';
import { nameButtonEnter } from '../../datas/datas';

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
                <div className={styles.planetAndWomenPicture}></div>
            </div>
        </div>
    )
};

export default StartPage;