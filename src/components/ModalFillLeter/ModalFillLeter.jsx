import styles from './modalFillLeter.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { modalFillLeterlReducer } from '../../redux/slices/informationSlice';
import AlertPictureSvg from '../../components/Svg/AlertPicture';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { nameButtonToQuestionnire, nameButtonFillLeter } from '../../datas/datas';


const box = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 327,
    height: 464,
    bgcolor: 'white',
    border: '1px solid #000',
    borderRadius: 6,
    boxShadow: 24,
    p: 3,
    marginBlock: 0,
};

export default function ModalFillLeter({ open }) {

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(modalFillLeterlReducer(false));
    };

    return (
        <div>
        <Modal
            open={open}
            aria-describedby="modal-modal-description"
        >
            <Box sx={box}>
                <div className={styles.container}>
                    <div className={styles.wrapperPicture}><AlertPictureSvg/></div>
                    <div className={styles.wrapperDescription}>
                        <h2 className={styles.titleDescription}>Заполнить позже?</h2>
                        <h3 className={styles.subTitleDescription}>Данные сохранятся. Вы сможете вернуться в заполнению позже, но функционал будет ограничен.</h3>
                    </div>
                    <div className={styles.wrapperButton}>
                        <Button click={closeModal} className={styles.button} name={nameButtonToQuestionnire}/>
                        <Link to='/' className={styles.link}>{nameButtonFillLeter}</Link>
                    </div>
                </div>
            </Box>
        </Modal>
        </div>
    );
}