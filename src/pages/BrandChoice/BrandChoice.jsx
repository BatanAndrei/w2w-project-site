import styles from './brandChoice.module.scss';
import Button from '../../components/Button/Button';
import { nameButtonFillQuestionnaire } from '../../datas/datas';
import { useNavigate } from "react-router-dom";
import ImageBeforeFillQuestionnnireSvg from '../../components/Svg/ImageBeforeFillQuestionnnireSvg';

const BrandQuestionnaire = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.wrapperBody}>
                <div className={styles.wrapperImage}>
                    <ImageBeforeFillQuestionnnireSvg />
                </div>
                <h2 className={styles.title}>ДО КОЛЛАБЫ<br/> ОДИН ШАГ!</h2>
                <p className={styles.decription}>Давайте познакомимся!<br/> Чтобы начать пользоваться сервисом<br/> и создавать коллаборации, заполните<br/> анкету</p>
            </div>
            <div className={styles.wrapperButton}>
                <Button click={() => navigate("/brand-choice/brand-questionnire-first")} name={nameButtonFillQuestionnaire} className={styles.button} />
            </div>
        </>
    )
};

export default BrandQuestionnaire;