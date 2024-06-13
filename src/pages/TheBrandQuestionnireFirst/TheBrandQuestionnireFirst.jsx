import styles from './theBrandQuestionnireFirst.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';
import FotoDivice from '../../components/Svg/FotoDivice';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { postAvatarUser } from '../../api/postAvatarUser';
import { useState } from 'react';


const TheBrandQuestionnire = () => {

    const [selectedFoto, setSelectedFoto] = useState(null);

    const dispatch = useDispatch();

    const chooseFotoForAvatar = (e) => {
        setSelectedFoto(e.target.files[0]);
    };

    const sendFotoForAvatar = () => {
        dispatch(postAvatarUser(selectedFoto));
    };


    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier />
            <div className={styles.wrapperSubtitle}><h2 className={styles.textSubtitle}>Загрузите ваше любимое фото</h2></div>
            <div className={styles.wrapperImageAvatar}>
                <input accept='image/*,.png,.jpg,.gif,.web' onChange={(e) => chooseFotoForAvatar(e)} type='file' className={styles.iconFotoDrvice}/>
                <Button className={styles.buttonChooseFile}><FotoDivice/></Button>
            </div>
            <Button click={sendFotoForAvatar} className={styles.TEST} name={'TEST POST FOTO'}/>
        </div>
    )
};

export default TheBrandQuestionnire;