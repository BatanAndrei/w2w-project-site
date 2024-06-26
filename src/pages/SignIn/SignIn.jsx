import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './signIn.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { signInSchema } from "../../validatorSchemas/validationSchema";
import { Link } from 'react-router-dom';
import { postSignIn } from '../../api/postSignIn';
import { useSelector, useDispatch } from 'react-redux';
import { nameButtonEnter } from '../../datas/datas';
import { selectStatusSignInUser, selectStatusLoadSignIn } from '../../redux/selectors/selectors';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { statusLoadNullSignInReducer } from '../../redux/slices/signInSlice';
import ArrowLeft from '../../components/Svg/ArrowLeft';


const defaultValues = {
    phoneNumberOrEmail: "",
    password: "",
};

const SignIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const statusSignInUser = useSelector(selectStatusSignInUser);
    const statusLoadSignIn = useSelector(selectStatusLoadSignIn);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        resolver: yupResolver(signInSchema)
    });


    const handleSignIn = async (data) => {  //password: "pass" //phoneNumberOrEmail: "+71231231214"
        dispatch(postSignIn(data));
    };

    useEffect(() => {
        if(statusSignInUser === 200 && statusLoadSignIn === 'resolved') {
            navigate("/onboarding-start");
        }
        dispatch(statusLoadNullSignInReducer());
        }, [statusLoadSignIn]);
        
    return (
        <div className={styles.containerPage}>
            <div className={styles.psevdoModal}></div>
            <div className={styles.titleWrapper}>
                <Link to='/start-page' className={styles.arrowLeft}><ArrowLeft/></Link>
                <h2 className={styles.titleText}>Вход</h2>
                <div className={styles.hiddenBlockForPosition}></div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
                <h2 className={styles.lable}>Телефон/Email</h2>
                <Field 
                    register={{...register("phoneNumberOrEmail")}}
                    autoComplete="off"
                    placeholder="+7 (999) 999-99-99"
                    className={styles.input}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.phoneNumberOrEmail) && <p className={styles.error}>{errors.phoneNumberOrEmail?.message}</p>}</div>
                <h2 className={styles.lable}>Пароль</h2>
                <Field 
                    register={{...register("password")}}
                    autoComplete="off"
                    placeholder="********"
                    className={styles.input}
                    type={'password'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.password) && <p className={styles.error}>{errors.password?.message}</p>}</div>
                <Button className={styles.button} name={nameButtonEnter} type="submit"/>
            </form>
            <div className={styles.wrapperQuestinText}>
                <h3 className={styles.questionText}>Нет профиля? <Link to="/signUp-create" className={styles.link}>Зарегистрируйтесь</Link></h3>
            </div>
        </div>
    )
};

export default SignIn;
