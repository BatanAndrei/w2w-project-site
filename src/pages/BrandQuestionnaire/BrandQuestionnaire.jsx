import styles from './brandQuestionnaire.module.scss';
import Button from '../../components/Button/Button';
import { nameButtonFillLeter, nameButtonFillQuestionnaire } from '../../datas/datas';
import { Link, useNavigate } from "react-router-dom";

const BrandQuestionnaire = () => {

    const navigate = useNavigate();


    return (
        <>
            <div className={styles.wrapperBody}>
                <h2 className={styles.title}>Анкета бренда</h2>
                <p className={styles.decription}>Ответь на вопросы, чтобы начать пользоваться сервисом и создавать коллаборации. Вы пожете приступить к этому этапу позже, зайдя в Профиль пользователя.</p>
                <div className={styles.wrapperRole}>
                    <div className={styles.brand}></div>
                </div>
            </div>
            <div className={styles.wrapperButton}>
                <Button click={() => navigate("/")} name={nameButtonFillLeter} className={styles.button+' '+styles.buttonMargin} />
                <Button click={() => navigate("/")} name={nameButtonFillQuestionnaire} className={styles.button} />
            </div>
        </>
    )
};

export default BrandQuestionnaire;