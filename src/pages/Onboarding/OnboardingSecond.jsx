import styles from './onboardingSecond.module.scss';
import Button from '../../components/Button/Button';
import CrossSvg from '../../components/Svg/CrossSvg';
import { nameButtonNext } from '../../datas/datas';
import { useNavigate } from "react-router-dom";


const OnboardingSecond = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapperHead}>
                    <CrossSvg click={() => navigate("/brand-choice")} className={styles.cross} />
                </div>
                <div className={styles.wrapperBody}>
                    <div className={styles.body}>КАК ПРАВИЛЬНО КОЛЛАБИТЬСЯ (second)</div>
                </div>
                <div className={styles.wrapperButton}>
                    <Button click={() => navigate("/onboarding-end")} name={nameButtonNext} className={styles.button} />
                </div>
            </div>
        </>
    )
};

export default OnboardingSecond;