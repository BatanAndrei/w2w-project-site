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
import { questionnireSchema } from '../../validatorSchemas/validationSchema';
import { nameButtonNext, nameButtonFillLeter } from '../../datas/datas';
import Select from '../../components/Select/Select';


const defaultValues = {
    birthDate: "",
    jobTitle: "",
    nikTelegrem: "",
    community: "",
    publicSpeaking: "",
    topicСommunication: ""
};

const TheBrandQuestionnireFirst = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        resolver: yupResolver(questionnireSchema),
    });

    const [selectedFoto, setSelectedFoto] = useState(null);

    const dispatch = useDispatch();

    const chooseFotoForAvatar = (e) => {
        setSelectedFoto(e.target.files[0]);
    };

    const sendFotoForAvatar = () => {
        dispatch(postAvatarUser(selectedFoto));
    };

    const dataQuestionnire = async (data) => {
        console.log(data)
    };

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} />
            <div className={styles.wrapperSubtitle}><h2 className={styles.textSubtitle}>Загрузите ваше любимое фото</h2></div>
            <div className={styles.wrapperImageAvatar}>
                <Field accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForAvatar(e)} type='file' className={styles.iconFotoDrvice}/>
                <Button className={styles.buttonChooseFile}><FotoDivice/></Button>
            </div>
            {<form className={styles.form} onSubmit={handleSubmit(dataQuestionnire)}>
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
                <Select
                    register={{...register("topicСommunication")}}
                    classNameInput={styles.input} 
                    classNameText={styles.textSelect} />
                <div className={styles.wrapperMessage}>{Boolean(errors.topicСommunication) && <p className={styles.error}>{errors.topicСommunication?.message}</p>}</div>
                <h2 className={styles.lable}>Готовы ли вы быть спикером прямого эфира или участвовать в публичном выступлении для резидентов?</h2>
                <Select
                    register={{...register("publicSpeaking")}}
                    classNameInput={styles.input} 
                    classNameText={styles.textSelect} />
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
            <Button className={styles.buttonFillLeter} name={nameButtonFillLeter}/>
        </div>
    )
};

export default TheBrandQuestionnireFirst;