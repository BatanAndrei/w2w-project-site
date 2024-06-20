import styles from './modalSentCheck.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { modalSentChecklReducer } from '../../redux/slices/informationSlice';
import AlertPictureSvg from '../../components/Svg/AlertPicture';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { nameButtonSend, nameButtonSaveAndExit} from '../../datas/datas';


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

export default function ModalSentCheck({ open }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(modalSentChecklReducer(false));
        navigate('/');
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
                        <h2 className={styles.titleDescription}>Отправить на проверку?</h2>
                        <h3 className={styles.subTitleDescription}>Вы отправляете анкету на проверку. По результатам получите уведомление о публикации.</h3>
                    </div>
                    <div className={styles.wrapperButton}>
                        <Button click={closeModal} className={styles.button} name={nameButtonSend}/>
                        <Link to='/' className={styles.link}>{nameButtonSaveAndExit}</Link>
                    </div>
                </div>
            </Box>
        </Modal>
        </div>
    );
}