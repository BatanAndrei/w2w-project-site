import styles from './startPage.module.scss';
import Logo from '../../components/Svg/LogoSvg';


const StartPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.psevdoModal}></div>
            <div className={styles.logo}>
                <Logo colorWhite={true}/>
            </div>
        </div>
    )
};

export default StartPage;