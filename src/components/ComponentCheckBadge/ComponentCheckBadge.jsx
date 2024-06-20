import styles from './componentCheckBladge.module.scss';
import { useState } from 'react';


const ComponentCheckBadge = ({dataListItems, classNameCheckBadge, classNameChangeColorBadge}) => {

    const [allListItems, setAllListItems] = useState(dataListItems);
    const [fillDataFromBadge, setFillDataFromBadge] = useState([]);

    const handleChangeBadge = (e, item) => {
        if(e.target.checked) {
            setFillDataFromBadge(pre => [...pre, e.target.name]);
        }else {
            setFillDataFromBadge(pre => {
                return [...pre.filter(item => item !== e.target.name)];
            })
        };

        const id = item.id
        let checkedItems = allListItems.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setAllListItems(checkedItems);
    }
console.log(fillDataFromBadge)
    return (
        <>
            {allListItems.map((item, index) => <label key={index}>
                    <input onChange={(e) => handleChangeBadge(e, item)} checked={item.checked} type='checkbox' name={item.title} id={item.id} className={styles.checkbox}/>
                    <span></span>
                    <div className={item.checked ? classNameChangeColorBadge : classNameCheckBadge}>{item.title}</div>
                </label>)}
        </>
    )
};

export default ComponentCheckBadge;