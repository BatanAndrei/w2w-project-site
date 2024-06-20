import styles from './theBrandQuestionnireThird.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';
import FieldTextArea from '../../components/FieldTextArea/FieldTextArea';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import ComponentCheckBadge from '../../components/ComponentCheckBadge/ComponentCheckBadge';
import { choiseValuesAnswerData, nameButtonNext, nameButtonFillLeter } from '../../datas/datas';
import Button from '../../components/Button/Button';
import { useState } from 'react';


const defaultValues = {
    missionBusiness: "",
};

const TheBrandQuestionnireThird = () => {

    const [quantityWord, setQuantityWord] = useState(0);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        //resolver: yupResolver(questionnireSchemaThirdPage),
    });

    const dataQuestionnireThird = async (data) => {
        navigate('/brand-choice/brand-questionnire-fouth')
        console.log(data)
    };

    const quantityWordTextArea = (e) => {
        if (e.target.value.length <= 50) {
            setQuantityWord(e.target.value);
        } else {
            return;
        }
    };

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} lineTwo={true} lineThree={true} />
            <div className={styles.wrapperSubtitle}>
                <p className={styles.textSubtitle}>Чтобы заинтересовать потенциального партнера опишите суть и ключевую миссию вашего бизнеса</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(dataQuestionnireThird)}>
                <FieldTextArea
                    value={quantityWord || ""}
                    oninput={(e) => quantityWordTextArea(e)}
                    register={{...register("missionBusiness")}}
                    autoComplete="off"
                    placeholder="Например, миссия бренда LVL — праздник каждый день"
                    className={styles.inputTextArea}
                    type={'text'}
                />
                <div className={styles.countWords}><p className={styles.textCount}>{!quantityWord.length ? 0 : quantityWord.length}/50</p></div>
                <div className={styles.wrapperSubtitle}>
                    <p className={styles.textSubtitle}>Выберите 3 ценности, наиболее подходящие вашему бренду (по ним будут выставляться совпадения на мэтч)</p>
                </div>
                <div className={styles.wrapperChoiseValues}>
                    <ComponentCheckBadge
                        dataListItems={choiseValuesAnswerData}
                        classNameCheckBadge={styles.checkBadge}
                        classNameChangeColorBadge={styles.changeBadge}
                    />
                </div>
                <Button className={styles.button} name={nameButtonNext} type="submit"/>
            </form>
            <Button click={()=> navigate('/')} className={styles.buttonFillLeter} name={nameButtonFillLeter}/>
        </div>
    )
};

export default TheBrandQuestionnireThird;