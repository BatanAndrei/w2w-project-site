import styles from './theBloggerQuestionnire.module.scss';
import { Link } from 'react-router-dom';


const TheBloggerQuestionnire = () => {

    return (
        <div className={styles.container}>
            <Link to="/signUp-create/confirm-phone">НАЗАД к проверочному номеру</Link>
            <div>Сдесь будет анкета блогера</div>
        </div>
    )
};

export default TheBloggerQuestionnire;