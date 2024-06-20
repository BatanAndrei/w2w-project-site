import styles from './modalFillLeter.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CrossSvg from '../Svg/CrossSvg';
import { useDispatch } from 'react-redux';
import { modalPersonalDatalReducer } from '../../redux/slices/informationSlice';
import { modalFillLeterlReducer } from '../../redux/slices/informationSlice';


const box = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 327,
    height: 176,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 6,
    boxShadow: 24,
    p: 2,
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
                <p id="modal-modal-description" className={styles.text}>
                Персона́льные данные (сокр. ПД) или личностные данные — сведения, относящиеся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных), которые могут быть предоставлены другим лицам.
                </p>
                <div className={styles.cross}><CrossSvg className={styles.button} click={closeModal}/></div>
            </Box>
        </Modal>
        </div>
    );
}