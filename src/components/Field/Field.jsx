import { memo } from "react";


export default memo(
    ({accept, register, type, className, value, change, placeholder, name, ...rest}) => {

    return (
        <input accept={accept} type={type} className={className} value={value} onChange={change} placeholder={placeholder} {...register} {...rest}/>
    );
}
);