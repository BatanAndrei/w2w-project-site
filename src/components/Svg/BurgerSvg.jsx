const BurgerMunuSvg = ({ className, click }) => {
    return (
    <button className={className} onClick={click}>
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="3" rx="1.5" fill="white"/>
            <rect y="8" width="24" height="3" rx="1.5" fill="white"/>
            <rect y="16" width="24" height="3" rx="1.5" fill="white"/>
        </svg>
    </button>
    )
};

export default BurgerMunuSvg;