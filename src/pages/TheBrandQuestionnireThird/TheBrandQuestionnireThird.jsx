import styles from './theBrandQuestionnireThird.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';



const TheBrandQuestionnireThird = () => {

    

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} lineTwo={true} lineThree={true} />
        </div>
    )
};

export default TheBrandQuestionnireThird;