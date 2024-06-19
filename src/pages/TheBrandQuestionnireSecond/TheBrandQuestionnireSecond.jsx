import styles from './theBrandQuestionnireSecond.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';
import Field from '../../components/Field/Field';
import LogoWordSvgPlaceholder from '../../components/Svg/LogoWordSvgPlaceholder';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import FotoDivice from '../../components/Svg/FotoDivice';
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { questionnireSchemaSecondPage } from '../../validatorSchemas/validationSchema';
import { nameButtonNext, nameButtonFillLeter } from '../../datas/datas';
//import MultipleSelectCheckmarks from '../../components/SelectCheckbox/SelectCheckbox';
import SelectRadio from '../../components/SelectRadioButton/SelectRadioButton';
import { useNavigate } from "react-router-dom";
import ComponentSelectCheckbox from '../../components/ComponentSelectCheckbox/ComponentSelectCheckbox';


const defaultValues = {
    nameBrand: "",
    categoryBusiness: "",
};

const TheBrandQuestionnireSecond = () => {

    const [selectedLogo, setSelectedLogo] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        //resolver: yupResolver(questionnireSchemaSecondPage),
    });

    const chooseFotoForLogo = (e) => {
        setSelectedLogo(e.target.files[0]);
    };

    const sendFotoForLogo = () => {
        //dispatch(postAvatarUser(selectedLogo));
    };

    const dataQuestionnireSecond = async (data) => {
        navigate('/brand-choice/brand-questionnire-third')
        console.log(data)
    };

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} lineTwo={true} />
            <div className={styles.wrapperSubtitle}><h2 className={styles.textSubtitle}>Загрузите логотип</h2></div>
            <div className={styles.wrapperImageLogo}>
                <dav className={styles.positionLogoImage}><LogoWordSvgPlaceholder/></dav>
                <Field accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForLogo(e)} type='file' className={styles.iconFotoDrvice}/>
                <Button className={styles.buttonChooseFile}><FotoDivice/></Button>
            </div>
            <div className={styles.wrapperDescriptionSlider}>
                <p className={styles.descriptionSlider}>Загрузите, пожалуйста, фото, иллюстрирующее ваш продукт (товар или услугу):</p>
            </div>
            <div className={styles.wrapperSlider}>
                <SimpleSlider/>
            </div>
            {<form className={styles.form} onSubmit={handleSubmit(dataQuestionnireSecond)}>
                <h2 className={styles.lable}>Название брэнда</h2>
                <Field 
                    register={{...register("nameBrand")}}
                    autoComplete="off"
                    placeholder="W2W"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.nameBrand) && <p className={styles.error}>{errors.nameBrand?.message}</p>}</div>
                <h2 className={styles.lable}>К какой категории относится ваш бизнес?</h2>
                <SelectRadio
                    register={{...register("categoryBusiness")}}
                />
                <div className={styles.wrapperMessage}>{Boolean(errors.categoryBusiness) && <p className={styles.error}>{errors.categoryBusiness?.message}</p>}</div>
                <h2 className={styles.lable}>Дата рождения</h2>
                <Field
                    placeholder="Выберите дату"
                    type={'text'}
                    focus={(e) => (e.target.type = "date")}
                    blur={(e) => (e.target.type = "text")}
                    register={{...register("birthDate")}}
                    autoComplete="off"
                    className={styles.input}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.birthDate) && <p className={styles.error}>{errors.birthDate?.message}</p>}</div>
                <h2 className={styles.lable}>Должность</h2>
                <Field 
                    register={{...register("jobTitle")}}
                    autoComplete="off"
                    placeholder="Маркетолог"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.jobTitle) && <p className={styles.error}>{errors.jobTitle?.message}</p>}</div>
                <h2 className={styles.lable}>На какие темы с тобой можно пообщаться? Или по каким темам ты можешь дать рекомендации?</h2>
                    <ComponentSelectCheckbox
                    register={{...register("topicСommunication")}}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.topicСommunication) && <p className={styles.error}>{errors.topicСommunication?.message}</p>}</div>
                <h2 className={styles.lable}>Готовы ли вы быть спикером прямого эфира или участвовать в публичном выступлении для резидентов?</h2>
                <SelectRadio
                    register={{...register("publicSpeaking")}}
                />
                <div className={styles.wrapperMessage}>{Boolean(errors.publicSpeaking) && <p className={styles.error}>{errors.publicSpeaking?.message}</p>}</div>
                <h2 className={styles.lable}>Состоите ли вы в каком-то комьюнити/сообществе предпринимателей? Напишите, пожалуйста, название или добавьте ссылку на сообщество</h2>
                <Field 
                    register={{...register("community")}}
                    autoComplete="off"
                    placeholder="Если не состоите, напишите — нет"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.community) && <p className={styles.error}>{errors.community?.message}</p>}</div>
                <Button className={styles.button} name={nameButtonNext} type="submit"/>
            </form>}
            <Button click={()=> navigate('/')} className={styles.buttonFillLeter} name={nameButtonFillLeter}/>
        </div>
    )
};

export default TheBrandQuestionnireSecond;