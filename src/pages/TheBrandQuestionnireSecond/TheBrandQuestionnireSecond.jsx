import styles from './theBrandQuestionnireSecond.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';



const TheBrandQuestionnireSecond = () => {

    

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} lineTwo={true} />
        </div>
    )
};

export default TheBrandQuestionnireSecond;