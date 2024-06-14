import { memo } from "react";


export default memo(
    ({click, ref, accept, register, type, className, value, change, placeholder, name, ...rest}) => {

    return (
        <input onClick={click} ref={ref} accept={accept} type={type} className={className} value={value} onChange={change} placeholder={placeholder} {...register} {...rest}/>
    );
}
);