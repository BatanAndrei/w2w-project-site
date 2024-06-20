import styles from './theBrandQuestionnireFouth.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';
import FieldTextArea from '../../components/FieldTextArea/FieldTextArea';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import ComponentCheckBadge from '../../components/ComponentCheckBadge/ComponentCheckBadge';
import { choiseCategoriesAnswerData, nameButtonNext, nameButtonFillLeter } from '../../datas/datas';
import Button from '../../components/Button/Button';
import { useState } from 'react';


const defaultValues = {
    targetAudience: "",
};


const TheBrandQuestionnireFouth = () => {

    const [quantityWord, setQuantityWord] = useState(0);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        //resolver: yupResolver(questionnireSchemaThirdPage),
    });

    const dataQuestionnireFouth = async (data) => {
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
            <TheHeaderQuestionnier lineOwn={true} lineTwo={true} lineThree={true} lineFour={true} />
            <div className={styles.wrapperSubtitle}>
                <p className={styles.textSubtitle}>Расскажите нам о ядре вашей целевой аудитории. Пожалуйста, укажите: пол, возраст, уровень дохода, ГЕО, интересы</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(dataQuestionnireFouth)}>
                <FieldTextArea
                    value={quantityWord || ""}
                    oninput={(e) => quantityWordTextArea(e)}
                    register={{...register("targetAudience")}}
                    autoComplete="off"
                    placeholder="Введите ваш текст"
                    className={styles.inputTextArea}
                    type={'text'}
                />
                <div className={styles.countWords}><p className={styles.textCount}>{quantityWord.length}/50</p></div>
                <div className={styles.wrapperSubtitle}>
                    <p className={styles.textSubtitle}>Выберите 3 категории, наиболее подходящие вашему бренду (по ним будут выставляться совпадения на мэтч)</p>
                </div>
                <div className={styles.wrapperChoiseValues}>
                    <ComponentCheckBadge
                        dataListItems={choiseCategoriesAnswerData}
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

export default TheBrandQuestionnireFouth;