import styles from './theBrandQuestionnireSecond.module.scss';
import TheHeaderQuestionnier from '../../components/TheHeaderQuestionnier/TheHeaderQuestionnier';
import Field from '../../components/Field/Field';
import LogoWordSvgPlaceholder from '../../components/Svg/LogoWordSvgPlaceholder';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import FotoDivice from '../../components/Svg/FotoDivice';
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { questionnireSchemaSecondPage } from '../../validatorSchemas/validationSchema';
import { nameButtonNext, nameButtonFillLeter } from '../../datas/datas';
//import MultipleSelectCheckmarks from '../../components/SelectCheckbox/SelectCheckbox';
import { useNavigate } from "react-router-dom";
import ComponentSelectCheckbox from '../../components/ComponentSelectCheckbox/ComponentSelectCheckbox';
import { useRef } from 'react';
import ComponentSelectRadio from '../../components/ComponentSelectRadio/ComponentSelectRadio';
import { howCategoryBusinessAnswerData, offLineOrOnLineBusinessAnswerData, howManySubscribersAnswerData, averageBillAnswerData, interestingFormatAnswerData, targetCollabAnswerData, businessWithCollabAnswerData } from '../../datas/datas';
import FieldTextArea from '../../components/FieldTextArea/FieldTextArea';


const defaultValues = {
    nameBrand: "",
    howCategoryBusiness: "",
    offLineOrOnLineBusiness: "",
    linkSMM: "",
    marketPlace: "",
    averageBill: "",
    uniqeProduct: "",
    problemResolve: "",
    interestingFormat: "",
    targetCollab: "",
    businessWithCollab: "",
};

const TheBrandQuestionnireSecond = () => {

    const [selectedLogo, setSelectedLogo] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filePicker = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        //resolver: yupResolver(questionnireSchemaSecondPage),
    });

    const chooseFotoForLogo = (e) => {
        setSelectedLogo(e.target.files[0]);
    };

    const handleClickPicker = () => {
        filePicker.current.click();
    };

    const sendFotoForLogo = () => {
        //dispatch(postAvatarUser(selectedLogo));
    };

    const dataQuestionnireSecond = async (data) => {
        navigate('/brand-choice/brand-questionnire-third')
        console.log(data)
    };

    return (
        <div className={styles.container}>
            <TheHeaderQuestionnier lineOwn={true} lineTwo={true} />
            <div className={styles.wrapperSubtitle}><h2 className={styles.textSubtitle}>Загрузите логотип</h2></div>
            <div onClick={handleClickPicker} className={styles.wrapperImageLogo}>
                <dav className={styles.positionLogoImage}><LogoWordSvgPlaceholder/></dav>
                <Field filePicker={filePicker} accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForLogo(e)} type='file' className={styles.iconFotoDrvice}/>
                <Button className={styles.buttonChooseFile}><FotoDivice/></Button>
            </div>
            <div className={styles.wrapperDescriptionSlider}>
                <p className={styles.descriptionSlider}>Загрузите, пожалуйста, фото, иллюстрирующее ваш продукт (товар или услугу):</p>
            </div>
            <div className={styles.wrapperSlider}>
                <SimpleSlider/>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(dataQuestionnireSecond)}>
                <h2 className={styles.lable}>Название брэнда</h2>
                <Field 
                    register={{...register("nameBrand")}}
                    autoComplete="off"
                    placeholder="W2W"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.nameBrand) && <p className={styles.error}>{errors.nameBrand?.message}</p>}</div>
                <h2 className={styles.lable}>К какой категории относится ваш бизнес?</h2>
                <ComponentSelectRadio 
                    type={'radio'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    dataListItems={howCategoryBusinessAnswerData}
                    register={{...register("howCategoryBusiness")}}
                    name={'howCategoryBusiness'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.howCategoryBusiness) && <p className={styles.error}>{errors.howCategoryBusiness?.message}</p>}</div>
                <h2 className={styles.lable}>У вас online или offline бренд?</h2>
                <ComponentSelectRadio 
                    type={'radio'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    dataListItems={offLineOrOnLineBusinessAnswerData}
                    register={{...register("offLineOrOnLineBusiness")}}
                    name={'offLineOrOnLineBusiness'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.offLineOrOnLineBusiness) && <p className={styles.error}>{errors.offLineOrOnLineBusiness?.message}</p>}</div>
                <h2 className={styles.lable}>Ссылка на страницу бренда в запрещенной соц. сети</h2>
                <Field 
                    register={{...register("linkSMM")}}
                    autoComplete="off"
                    placeholder="@W2Wmatch"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.linkSMM) && <p className={styles.error}>{errors.linkSMM?.message}</p>}</div>
                <h2 className={styles.lable}>Ссылка на сайт бренда или на маркетплейс (WB, OZON, Lamoda, Яндекс Маркет)</h2>
                <Field 
                    register={{...register("marketPlace")}}
                    autoComplete="off"
                    placeholder="W2Wmatch.ru / если нет — прочерк"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.marketPlace) && <p className={styles.error}>{errors.marketPlace?.message}</p>}</div>
                <h2 className={styles.lable}>Сколько подписчиков у вашего бренда в запрещенной сети?</h2>
                <ComponentSelectRadio 
                    type={'radio'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    dataListItems={howManySubscribersAnswerData}
                    register={{...register("howManySubscribers")}}
                    name={'howManySubscribers'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.howManySubscribers) && <p className={styles.error}>{errors.howManySubscribers?.message}</p>}</div>
                <h2 className={styles.lable}>Средний чек вашего бренда (в рублях)?</h2>
                <ComponentSelectRadio 
                    type={'radio'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    dataListItems={averageBillAnswerData}
                    register={{...register("averageBill")}}
                    name={'averageBill'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.howManySubscribers) && <p className={styles.error}>{errors.howManySubscribers?.message}</p>}</div>
                <h2 className={styles.lable}>В чем уникальность вашего продукта?</h2>
                <FieldTextArea
                    register={{...register("uniqeProduct")}}
                    autoComplete="off"
                    placeholder="Введите Ваш текст"
                    className={styles.inputTextArea}
                    type={'text'}
                />
                <div className={styles.wrapperMessage}>{Boolean(errors.uniqeProduct) && <p className={styles.error}>{errors.uniqeProduct?.message}</p>}</div>
                <h2 className={styles.lable}>Какую проблему вы решаете для клиента?</h2>
                <FieldTextArea
                    register={{...register("problemResolve")}}
                    autoComplete="off"
                    placeholder="Введите Ваш текст"
                    className={styles.inputTextArea}
                    type={'text'}
                />
                <div className={styles.wrapperMessage}>{Boolean(errors.problemResolve) && <p className={styles.error}>{errors.problemResolve?.message}</p>}</div>
                <h2 className={styles.lable}>Интересующие форматы для взаимодействия</h2>
                <ComponentSelectCheckbox 
                    type={'checkbox'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    register={{...register("interestingFormat")}}
                    dataListItems={interestingFormatAnswerData}
                    textAreaOnOff={false}
                />
                <div className={styles.wrapperMessage}>{Boolean(errors.interestingFormat) && <p className={styles.error}>{errors.interestingFormat?.message}</p>}</div>
                <h2 className={styles.lable}>Цель коллаборации</h2>
                <ComponentSelectCheckbox 
                    type={'checkbox'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    register={{...register("targetCollab")}}
                    dataListItems={targetCollabAnswerData}
                    textAreaOnOff={true}
                />
                <div className={styles.wrapperMessage}>{Boolean(errors.targetCollab) && <p className={styles.error}>{errors.targetCollab?.message}</p>}</div>
                <h2 className={styles.lable}>С бизнесом из какой категории вам было бы интересно сделать коллаборацию?</h2>
                <ComponentSelectRadio 
                    type={'radio'}
                    placeholder='Выбрать'
                    classNamePositionLableSelect={styles.positionLableSelect}
                    classNameTextTitleSelect={styles.textTitleSelect}
                    dataListItems={businessWithCollabAnswerData}
                    register={{...register("businessWithCollab")}}
                    name={'businessWithCollab'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.businessWithCollab) && <p className={styles.error}>{errors.businessWithCollab?.message}</p>}</div>

                <Button className={styles.button} name={nameButtonNext} type="submit"/>
            </form>
            <Button click={()=> navigate('/')} className={styles.buttonFillLeter} name={nameButtonFillLeter}/>
        </div>
    )
};

export default TheBrandQuestionnireSecond;