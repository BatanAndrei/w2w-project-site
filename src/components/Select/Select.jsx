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
                <option value="value1">Да</option>
                <option value="value2">Нет</option>
            </select>
        </div>
    );
}