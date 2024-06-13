import styles from './theBrandQuestionnireThird.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';



const TheBrandQuestionnireThird = () => {

    

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier pageOwn={true} pageTwo={true} pageThree={true} />
        </div>
    )
};

export default TheBrandQuestionnireThird;