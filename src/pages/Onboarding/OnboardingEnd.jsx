import styles from './onboardingEnd.module.scss';
import Button from '../../components/Button/Button';
import Cross from '../../components/Svg/Cross';
import { nameButtonContinue } from '../../datas/datas';
import { useNavigate } from "react-router-dom";


const OnboardingEnd = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.wrapperHead}>
                <Cross click={() => navigate("/choose-role")} className={styles.cross} />
            </div>
            <div className={styles.wrapperBody}>
                <div className={styles.body}>Онбординг END</div>
            </div>
            <div className={styles.wrapperButton}>
                <Button click={() => navigate("/choose-role")} name={nameButtonContinue} className={styles.button} />
            </div>
        </>
    )
};

export default OnboardingEnd;