import { useState } from "react";

export default function SelectLabels({classNameText, classNameInput, register, ...rest}) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <select name='select' className={classNameInput} {...register} {...rest} onChange={handleChange} value={value}>
                <option className={classNameText}value="" disabled>Выбрать</option>
                <option value="value1">Значение 1</option>
                <option value="value2">Значение 2</option>
                <option value="value3">Значение 3</option>
            </select>
        </div>
    );
}