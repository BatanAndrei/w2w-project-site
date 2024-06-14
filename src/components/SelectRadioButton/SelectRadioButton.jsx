import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import styles from './selectRadioButton.module.scss';
import { publicSpikingAnswer } from '../../datas/datas';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

export default function MultipleSelectCheckmarks({register, ...rest}) {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
            } = event;
            setPersonName(
            typeof value === 'string' ? value.split(',') : value,
            );
    };

    return (
        <div>
        <FormControl>
            <Select
            sx={{ borderRadius: '16px', width: '91.84vw', height: '6.49vh', border: 1 }}
            {...register} {...rest}
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
            if (selected.length === 0) {
                return <h2 className={styles.text}>Выбрать</h2>;
            }
            return selected.join(', ');
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
            >
            {publicSpikingAnswer.map((name) => (
                <MenuItem key={name} value={name}>
                    <input type='radio' id={name} name="answer"></input>
                <ListItemText primary={name} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </div>
    );
}