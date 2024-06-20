import { memo } from "react";

export default memo(
    ({oninput, filePicker, blur, focus, click, accept, register, type, className, value, change, placeholder, name, ...rest}) => {

    return (
        <textarea onInput={oninput} ref={filePicker} onBlur={blur} onFocus={focus} onClick={click} accept={accept} type={type} className={className} value={value} onChange={change} placeholder={placeholder} {...register} {...rest}/>
    );
}
);