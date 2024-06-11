const Button = ({ name, className, click, type, children }) => {
    return (
        <button className={className} onClick={click} type={type}>{name}{children}</button>
    )
};

export default Button;