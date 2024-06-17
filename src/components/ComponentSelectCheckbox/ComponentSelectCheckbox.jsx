import styles from './componentSelectCheckbox.module.scss';
import { useState } from 'react';


const ComponentSelectCheckbox = ({dataListItems, classNameInputTextSelect, classNameTextTitleSelect, classNamePositionLableSelect, type, register, ...rest}) => {

    const [displayCheckboxes, setDisplayCheckboxes] = useState(false);
    const [fillDataFromCheckboxes, setFillDataFromCheckboxes] = useState([]);
    const [allListItems, setAllListItems] = useState(dataListItems)

    const handleDropeList = () => {
        setDisplayCheckboxes(() => !displayCheckboxes);
    };

    const handleChangeCheckbox = (e, item) => {
        if(e.target.checked) {
            setFillDataFromCheckboxes(pre => [...pre, e.target.name])
        }else {
            setFillDataFromCheckboxes(pre => {
                return [...pre.filter(item => item !== e.target.name)]
            })
        };
        
        const id = item.id
        let checkedItems = allListItems.map((item) => item.id === id ? {...item, checked: !item.checked, count: 1} : item);
        setAllListItems(checkedItems);
    };
    
    return (
        <>
            <input onClick={handleDropeList} value={fillDataFromCheckboxes.join(', ')} className={classNameInputTextSelect} type='type' {...register} {...rest} readonly/>
            {displayCheckboxes && <div className={styles.containerDropeList}>
                <div className={styles.wrapperCheckboxes}>
                    {allListItems.map((item, index) => <label className={classNamePositionLableSelect} key={index}>
                    <input onChange={(e) => handleChangeCheckbox(e, item)} checked={item.checked} type={type} name={item.title} id={item.id} className={styles.checkbox}/>
                    <span className={styles.fake}></span>
                    <div className={classNameTextTitleSelect}>{item.title}</div>
                </label>)}
                </div>
            </div>}
        </>
    )
};

export default ComponentSelectCheckbox;