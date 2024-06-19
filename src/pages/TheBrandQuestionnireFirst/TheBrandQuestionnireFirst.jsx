import styles from './theBrandQuestionnireFirst.module.scss';
import FotoDivice from '../../components/Svg/FotoDivice';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { postAvatarUser } from '../../api/postAvatarUser';
import { useState } from 'react';
import Field from '../../components/Field/Field';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { questionnireSchemaFirstPage } from '../../validatorSchemas/validationSchema';
import { nameButtonNext, nameButtonFillLeter } from '../../datas/datas';
import AvatarPlaceHolder from '../../components/Svg/AvatarPlaceHolder';
import { useNavigate } from "react-router-dom";
import { publicSpikingAnswerData, communicationSpikingAnswerData } from '../../datas/datas';
import ComponentSelectCheckbox from '../../components/ComponentSelectCheckbox/ComponentSelectCheckbox';
import ComponentSelectRadio from '../../components/ComponentSelectRadio/ComponentSelectRadio';
import { useRef } from 'react';


const defaultValues = {
    fullName: "",
    nikTelegrem: "",
    birthDate: "",
    jobTitle: "",
    topicСommunication: "",
    publicSpeaking: "",
    community: ""
};

const TheBrandQuestionnireFirst = () => {

    const navigate = useNavigate();
    const filePicker = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        //resolver: yupResolver(questionnireSchemaFirstPage),
    });

    const [selectedFoto, setSelectedFoto] = useState(null);

    const dispatch = useDispatch();

    const chooseFotoForAvatar = (e) => {
        setSelectedFoto(e.target.files[0]);
    };

    const handleClickPicker = () => {
        filePicker.current.click();
    };

    const sendFotoForAvatar = () => {
        //dispatch(postAvatarUser(selectedFoto));
    };

    const dataQuestionnireFirst = async (data) => {
        navigate('/brand-choice/brand-questionnire-second')
        console.log(data)
    };

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} />
            <div className={styles.wrapperSubtitle}><h2 className={styles.textSubtitle}>Загрузите ваше любимое фото</h2></div>
            <div onClick={handleClickPicker} className={styles.wrapperImageAvatar}>
                <dav className={styles.positionAvatarImage}><AvatarPlaceHolder/></dav>
                <Field filePicker={filePicker} accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForAvatar(e)} type='file' className={styles.iconFotoDrvice}/>
                <Button className={styles.buttonChooseFile}><FotoDivice/></Button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(dataQuestionnireFirst)}>
                <h2 className={styles.lable}>Фамилия Имя</h2>
                <Field 
                    register={{...register("fullName")}}
                    autoComplete="off"
                    placeholder="Иванова Екатерина"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.fullName) && <p className={styles.error}>{errors.fullName?.message}</p>}</div>
                <h2 className={styles.lable}>Ник в Telegram</h2>
                <Field 
                    register={{...register("nikTelegrem")}}
                    autoComplete="off"
                    placeholder="@mika"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.nikTelegrem) && <p className={styles.error}>{errors.nikTelegrem?.message}</p>}</div>
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
                    type={'checkbox'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    register={{...register("topicСommunication")}}
                    dataListItems={communicationSpikingAnswerData}
                    textAreaOnOff={true}
                />
                <div className={styles.wrapperMessage}>{Boolean(errors.topicСommunication) && <p className={styles.error}>{errors.topicСommunication?.message}</p>}</div>
                <h2 className={styles.lable}>Готовы ли вы быть спикером прямого эфира или участвовать в публичном выступлении для резидентов?</h2>
                <ComponentSelectRadio 
                    type={'radio'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    dataListItems={publicSpikingAnswerData}
                    register={{...register("publicSpeaking")}}
                    name={'publicSpeaking'}
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
            </form>
            <Button click={()=> navigate('/')} className={styles.buttonFillLeter} name={nameButtonFillLeter}/>
        </div>
    )
};

export default TheBrandQuestionnireFirst;