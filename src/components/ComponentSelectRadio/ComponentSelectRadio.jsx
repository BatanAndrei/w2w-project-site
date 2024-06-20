import styles from './componentSelectRadio.module.scss';
import { useState } from 'react';
import ArrowDown from '../Svg/ArrowDown';
import ArrowUp from '../Svg/ArrowUp';

const ComponentSelectRadio = ({name, placeholder ,dataListItems, classNameTextTitleSelect, type, register, ...rest}) => {

    const [displayRadio, setDisplayRadio] = useState(false);
    const [fillDataFromRadio, setFillDataFromRadio] = useState('');

    const handleDropeList = () => {
        setDisplayRadio(() => !displayRadio);
    };

    const handleChangeRadio = (e) => {
        setFillDataFromRadio(e.target.value)
    };

    return (
        <>  
            <div className={styles.containerMainInput}>
                <input placeholder={!displayRadio && placeholder} onChange={e => {}} className={styles.input} {...register} {...rest} value={fillDataFromRadio}
                />
                <div onClick={handleDropeList} className={styles.arrow}>{displayRadio ? <ArrowUp/> : <ArrowDown/>}</div>
            </div>
            {displayRadio && <div className={styles.containerDropeList}>
                <div className={styles.wrapperRadio}>
                    {dataListItems.map((item, index) => <label className={styles.radio} key={index}>
                    <input onChange={(e) => handleChangeRadio(e)} type={type} name={name} id={item.id} value={item.title}/>
                    <span>{item.title}</span>
                </label>)}
                </div>
            </div>}
        </>
    )
};

export default ComponentSelectRadio;

{/* <label className={style.custom_radio}>
                    <input onChange={() => {dispatch(choiseSseven())}} type="radio" name='company' value="sevenairlines"/>
                    <span>S7 Airlines</span>
                </label> */}