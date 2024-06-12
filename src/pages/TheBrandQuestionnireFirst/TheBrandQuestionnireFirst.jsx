import styles from './theBrandQuestionnireFirst.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';
import FotoDivice from '../../components/Svg/FotoDivice';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import axios from "axios";


export const PostFoto = axios.create({
    baseURL: `https://dipdeepcode.ru/api`,
    withCredentials: true
});

const TheBrandQuestionnire = () => {

    const [selectedFoto, setSelectedFoto] = useState(null);
    const [displayFoto, setDisplayFoto] = useState();

    const chooseFotoForQuestionnier = (e) => {
        setSelectedFoto(e.target.files[0].name);
    };

    const addFotoForQuestionnire = async () => {
        if(!selectedFoto) {
            alert('Выберете своё фото');
            return;
        };

        const formData = new FormData();
        formData.append('file', selectedFoto);

        const response = await PostFoto.post(`/files`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });

        if(response.status !== 200) {
            throw new Error('Something went wrong!');
        }

        const data = response;
        
        return data;

       /*  const res = await fetch("https://dipdeepcode.ru/api/files", {
            method: 'POST',
            body: formData,
        });
        const data = await res.json(); */

        //setDisplayFoto(data);
    };
    console.log(selectedFoto)

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier />
            <div className={styles.wrapperSubtitle}><h2 className={styles.textSubtitle}>Загрузите ваше любимое фото</h2></div>
            <div className={styles.wrapperImageOnQuestionnier}>
                <input accept='image/*,.png,.jpg,.gif,.web' onChange={chooseFotoForQuestionnier} type='file' className={styles.iconFotoDrvice}/>
                <Button className={styles.buttonChooseFile}><FotoDivice/></Button>
            </div>
            <Button click={addFotoForQuestionnire} className={styles.TEST} name={'TEST POST FOTO'}/>
        </div>
    )
};

export default TheBrandQuestionnire;