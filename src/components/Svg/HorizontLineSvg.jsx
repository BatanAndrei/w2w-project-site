const HorizontLineSvg = ({ purple }) => {
    return (
        <>
            {purple ? 
                <svg width="77" height="4" viewBox="0 0 77 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L75 2.00001" stroke="#858FA3" stroke-width="3" strokeLinecap="round"/>
                </svg>
                :
                <svg width="77" height="4" viewBox="0 0 77 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H75" stroke="#CA3CF1" stroke-width="3" strokeLinecap="round"/>
                </svg>
            } 
        </>
    )
};

export default HorizontLineSvg;