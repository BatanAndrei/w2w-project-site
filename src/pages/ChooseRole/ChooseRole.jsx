import styles from './chooseRole.module.scss';
import Button from '../../components/Button/Button';
import { nameButtonContinue } from '../../datas/datas';
import { Link, useNavigate } from "react-router-dom";


const ChooseRole = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.wrapperBody}>
                <h2 className={styles.title}>Выберите роль</h2>
                <p className={styles.decription}>От выбранной роли будут зависеть обязательные вопросы анкеты и совпадения</p>
                <div className={styles.wrapperRole}>
                    <div className={styles.brendContainer}>
                        <Link to="/choose-role/brand-choice"><div className={styles.brend}></div></Link>
                        <h3 className={styles.titleBrend}>Бренд</h3>
                    </div>
                    <div className={styles.bloggerContainer}>
                        <Link to="/choose-role/blogger-choice"><div className={styles.blogger}></div></Link>
                        <h3 className={styles.titleBlogger}>Блогер</h3>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperButton}>
                <Button click={() => navigate("/")} name={nameButtonContinue} className={styles.button} />
            </div>
        </>
    )
};

export default ChooseRole;