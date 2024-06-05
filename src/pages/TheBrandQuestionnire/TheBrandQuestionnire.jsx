import styles from './theBrandQuestionnire.module.scss';
import { Link } from 'react-router-dom';


const TheBrandQuestionnire = () => {

    return (
        <div className={styles.container}>
            <Link to="/signUp-create/confirm-phone">НАЗАД к проверочному номеру</Link>
            <div>Сдесь будет анкета бренда</div>
        </div>
    )
};

export default TheBrandQuestionnire;