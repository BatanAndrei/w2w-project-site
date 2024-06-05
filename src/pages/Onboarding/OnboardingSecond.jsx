import styles from './onboardingSecond.module.scss';
import Button from '../../components/Button/Button';
import Cross from '../../components/Svg/Cross';
import { nameButtonNext } from '../../datas/datas';
import { useNavigate } from "react-router-dom";


const OnboardingSecond = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.wrapperHead}>
                <Cross click={() => navigate("/choose-role")} className={styles.cross} />
            </div>
            <div className={styles.wrapperBody}>
                <div className={styles.body}>Онбординг SECOND</div>
            </div>
            <div className={styles.wrapperButton}>
                <Button click={() => navigate("/onboarding-end")} name={nameButtonNext} className={styles.button} />
            </div>
        </>
    )
};

export default OnboardingSecond;