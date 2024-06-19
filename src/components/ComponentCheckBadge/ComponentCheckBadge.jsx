import styles from './componentCheckBladge.module.scss';
import { useState } from 'react';


const ComponentCheckBadge = ({dataListItems, classNameCheckBadge, classNameChangeColorBadge}) => {

    const [allListItems, setAllListItems] = useState(dataListItems);

    const handleChangeBadge = (item) => {
        const id = item.id
        let checkedItems = allListItems.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setAllListItems(checkedItems);
    }

    return (
        <>
            {allListItems.map((item) => <div onClick={() => handleChangeBadge(item)} className={item.checked ? classNameChangeColorBadge : classNameCheckBadge}>{item.title}</div>)}
        </>
    )
};

export default ComponentCheckBadge;