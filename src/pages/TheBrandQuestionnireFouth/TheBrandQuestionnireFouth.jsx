import styles from './theBrandQuestionnireFouth.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';



const TheBrandQuestionnireFouth = () => {

    

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} lineTwo={true} lineThree={true} lineFour={true} />
        </div>
    )
};

export default TheBrandQuestionnireFouth;