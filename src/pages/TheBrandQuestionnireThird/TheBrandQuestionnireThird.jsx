import styles from './theBrandQuestionnireThird.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';
import FieldTextArea from '../../components/FieldTextArea/FieldTextArea';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";


const defaultValues = {
    missionBusiness: "",
};

const TheBrandQuestionnireThird = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        //resolver: yupResolver(questionnireSchemaSecondPage),
    });

    const dataQuestionnireThird = async (data) => {
        navigate('/brand-choice/brand-questionnire-fouth')
        console.log(data)
    };

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} lineTwo={true} lineThree={true} />
            <div className={styles.wrapperSubtitle}>
                <p className={styles.textSubtitle}>Чтобы заинтересовать потенциального партнера опишите суть и ключевую миссию вашего бизнеса</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(dataQuestionnireThird)}>
            <FieldTextArea
                register={{...register("missionBusiness")}}
                autoComplete="off"
                placeholder="Например, миссия бренда LVL — праздник каждый день"
                className={styles.inputTextArea}
                type={'text'}
            />
            <div className={styles.countWords}><p className={styles.textCount}>0/50</p></div>
            <div className={styles.wrapperSubtitle}>
                <p className={styles.textSubtitle}>Выберите 3 ценности, наиболее подходящие вашему бренду (по ним будут выставляться совпадения на мэтч)</p>
            </div>
            </form>
        </div>
    )
};

export default TheBrandQuestionnireThird;