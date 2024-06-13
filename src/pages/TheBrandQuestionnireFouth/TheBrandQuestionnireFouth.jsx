import styles from './theBrandQuestionnireFouth.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';



const TheBrandQuestionnireFouth = () => {

    

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier pageOwn={true} pageTwo={true} pageThree={true} pageFour={true} />
        </div>
    )
};

export default TheBrandQuestionnireFouth;