import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from './select.module.scss';


export default function SelectLabels({classNameText, classNameInput}) {
    const [option, setOption] = React.useState('');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <div>
            <Select className={classNameInput}
                value={option}
                onChange={handleChange}
                displayEmpty
            >
                <MenuItem className={styles.title} value="">
                    <h2 className={classNameText}>Выбрать</h2>
                </MenuItem>
                <MenuItem className={styles.title} value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </div>
    );
}