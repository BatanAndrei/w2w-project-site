import { memo } from "react";


export default memo(
    ({blur, focus, click, ref, accept, register, type, className, value, change, placeholder, name, ...rest}) => {

    return (
        <input onBlur={blur} onFocus={focus} onClick={click} ref={ref} accept={accept} type={type} className={className} value={value} onChange={change} placeholder={placeholder} {...register} {...rest}/>
    );
}
);

