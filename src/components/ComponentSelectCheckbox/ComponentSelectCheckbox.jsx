import styles from './componentSelectCheckbox.module.scss';
import { useState } from 'react';
import ArrowDown from '../Svg/ArrowDown';
import ArrowUp from '../Svg/ArrowUp';

const ComponentSelectCheckbox = ({textAreaOnOff, placeholder, dataListItems, classNameTextTitleSelect, classNamePositionLableSelect, type, register, ...rest}) => {

    const [displayCheckboxes, setDisplayCheckboxes] = useState(false);
    const [displayTextArea, setDisplayTextArea] = useState(false);
    const [fillDataFromCheckboxes, setFillDataFromCheckboxes] = useState([]);
    const [allListItems, setAllListItems] = useState(dataListItems);

    const handleDropeList = () => {
        setDisplayCheckboxes(() => !displayCheckboxes);
    };

    const handleChangeCheckbox = (e, item) => {
        if(e.target.checked) {
            setFillDataFromCheckboxes(pre => [...pre, e.target.name]);
        }else {
            setFillDataFromCheckboxes(pre => {
                return [...pre.filter(item => item !== e.target.name)];
            })
        };

        const id = item.id
        let checkedItems = allListItems.map((item) => item.id === id ? {...item, checked: !item.checked, count: 1} : item);
        setAllListItems(checkedItems);
    };

    const handleDropeTextArea = (e) => {
        if(e.target.checked) {
            setDisplayTextArea(true)
        }else {
            setDisplayTextArea(false)
        }
    };
    
    return (
        <>  
            <div className={styles.containerMainInput}>
                <input placeholder={!displayCheckboxes && placeholder} onChange={e => {}} value={fillDataFromCheckboxes.join(', ')} className={styles.input} {...register} {...rest}
                />
                <div onClick={handleDropeList} className={styles.arrow}>{displayCheckboxes ? <ArrowUp/> : <ArrowDown/>}</div>
            </div>
            {displayCheckboxes && <div className={styles.containerDropeList}>
                <div className={styles.wrapperCheckboxes}>
                    {allListItems.map((item, index) => <label className={classNamePositionLableSelect} key={index}>
                    <input onChange={(e) => handleChangeCheckbox(e, item)} checked={item.checked} type={type} name={item.title} id={item.id} className={styles.checkbox}/>
                    <span className={styles.fake}></span>
                    <div className={classNameTextTitleSelect}>{item.title}</div>
                </label>)}
                {textAreaOnOff && <label className={classNamePositionLableSelect}>
                    <input checked={displayTextArea} onClick={(e) => handleDropeTextArea(e)} type={type} className={styles.checkbox}/>
                    <span className={styles.fake}></span>
                    <div className={classNameTextTitleSelect}>Свой вариант</div>
                </label>}
                {displayTextArea && <div className={styles.wrapperTextArea}>
                    <textarea placeholder='Введите Ваш текст' className={styles.textArea}></textarea> 
                </div>}
                </div>
            </div>}
        </>
    )
};

export default ComponentSelectCheckbox;