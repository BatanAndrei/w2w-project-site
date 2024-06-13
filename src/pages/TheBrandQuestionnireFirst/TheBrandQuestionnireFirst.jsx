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
import { Link } from 'react-router-dom';
import { nameButtonNext } from '../../datas/datas';


const defaultValues = {
    dateBirth: "",
    jobTitle: "",
    nikTelegrem: "",
    nikInstagram: "",
};

const TheBrandQuestionnireFirst = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        resolver: yupResolver(questionnireSchema)
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
        console.log(data);
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
                <h2 className={styles.lable}>Дата рождения</h2>
                <Field
                    register={{...register("dateBirth")}}
                    autoComplete="off"
                    className={styles.inputDateHidden} 
                    type={'date'}/>
                <Field 
                    placeholder="01.01.0001"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.dateBirth) && <p className={styles.error}>{errors.dateBirth?.message}</p>}</div>
                <h2 className={styles.lable}>Должность</h2>
                <Field 
                    register={{...register("jobTitle")}}
                    autoComplete="off"
                    placeholder="Маркетолог"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.jobTitle) && <p className={styles.error}>{errors.jobTitle?.message}</p>}</div>
                <h2 className={styles.lable}>Ник в Telegram</h2>
                <Field 
                    register={{...register("nikTelegrem")}}
                    autoComplete="off"
                    placeholder="@mika"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.nikTelegrem) && <p className={styles.error}>{errors.nikTelegrem?.message}</p>}</div>
                <h2 className={styles.lable}>Ник в Instagram (страница, где вы отметите W2W Match)*</h2>
                <Field 
                    register={{...register("nikInstagram")}}
                    autoComplete="off"
                    placeholder="@mika"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.nikInstagram) && <p className={styles.error}>{errors.nikInstagram?.message}</p>}</div>
                <Button className={styles.button} name={nameButtonNext} type="submit"/>
            </form>}
        </div>
    )
};

export default TheBrandQuestionnireFirst;