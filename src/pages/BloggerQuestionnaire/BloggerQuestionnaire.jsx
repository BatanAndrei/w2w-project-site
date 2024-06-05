import styles from './bloggerQuestionnaire.module.scss';
import Button from '../../components/Button/Button';
import { nameButtonFillLeter, nameButtonFillQuestionnaire } from '../../datas/datas';
import { Link, useNavigate } from "react-router-dom";

const BloggerQuestionnaire = () => {

    const navigate = useNavigate();


    return (
        <>
            <div className={styles.wrapperBody}>
                <h2 className={styles.title}>Анкета блогера</h2>
                <p className={styles.decription}>Пришло время заполнить анкету. Вы пожете приступить к этому этапу позже, зайдя в Профиль пользователя, но рекомендуем заполнить сейчас, чтобы иметь возможность</p>
                <div className={styles.wrapperRole}>
                    <div className={styles.blogger}></div>
                </div>
            </div>
            <div className={styles.wrapperButton}>
                <Button click={() => navigate("/")} name={nameButtonFillLeter} className={styles.button+' '+styles.buttonMargin} />
                <Button click={() => navigate("/")} name={nameButtonFillQuestionnaire} className={styles.button} />
            </div>
        </>
    )
};

export default BloggerQuestionnaire;