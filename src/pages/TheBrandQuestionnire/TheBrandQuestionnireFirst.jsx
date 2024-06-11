import styles from './theBrandQuestionnireFirst.module.scss';
import { Link } from 'react-router-dom';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';


const TheBrandQuestionnire = () => {

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier />
        </div>
    )
};

export default TheBrandQuestionnire;