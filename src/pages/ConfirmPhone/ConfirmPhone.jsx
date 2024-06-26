import styles from './confirmPhone.module.scss';
import ArrowBackSvg from '../../components/Svg/ArrowBackSvg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { nameButtonEnter } from '../../datas/datas';
import { useState } from 'react';
import { selectStatusRegistrationUser, selectStatusLoadRegistration } from '../../redux/selectors/selectors';
import { postAuthRegistration } from '../../api/postAuthRegistration';
import { useSelector, useDispatch } from 'react-redux';
import { statusLoadNullRegisterReducer } from '../../redux/slices/authRegistrationSlice';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Field from '../../components/Field/Field';

const ConfirmPhone = () => {

const navigate = useNavigate();

const [otp, setOtp] = useState(new Array(4).fill(""));

const dispatch = useDispatch();
const statusRegistrationUser = useSelector(selectStatusRegistrationUser);
const statusLoadRegistration = useSelector(selectStatusLoadRegistration);

const handleChange = (e, index) => {

    if(isNaN(e.target.value)) return false;

    setOtp([...otp.map((data, ind) => (ind === index ? e.target.value : data))]);

    if(e.target.value && e.target.nextSibling) {
        e.target.nextSibling.focus();
    }
};

const handleRegistrationUser = () => {
    dispatch(postAuthRegistration(otp.join(""))); 
};

useEffect(() => {
    if(statusRegistrationUser === 200 && statusLoadRegistration === 'resolved') {
        navigate("/onboarding-start");
    }
    dispatch(statusLoadNullRegisterReducer())
    }, [statusLoadRegistration]);

    return (
        <>
            <div className={styles.wrapperArrow}>
                <Link to='/signUp-create'><ArrowBackSvg className={styles.buttonArrow}/></Link>
            </div>
            <div className={styles.functionalArea}>
                <div>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>Подтвердите ваш email</h2>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <h3 className={styles.description}>Введите 4 цифры кода, отправленного на ваш email</h3>
                    </div>
                    <div className={styles.wrapperInput}>
                        {otp.map((data, i) => {
                            return <Field key={i} className={styles.otpInput}
                            type='password' 
                            value={data}
                            maxLength={1}
                            onChange={(e) => handleChange(e, i)}
                            />})}
                    </div>
                    <div className={styles.linkWrapper}>        
                        <Link className={styles.link}>Отправить код ещё раз</Link>
                    </div>
                </div>
                <Button click={handleRegistrationUser} className={styles.button} name={nameButtonEnter}/>
            </div>
        </>
    )
};

export default ConfirmPhone;