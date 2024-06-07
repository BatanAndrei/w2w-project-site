const Blur2 = () => {
    return (
        <div>
            <svg width="360" height="401" viewBox="0 0 360 401" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_638_5270)">
            <rect x="-5" y="200" width="205" height="205" rx="102.5" fill="#C90A70"/>
            </g>
            <defs>
            <filter id="filter0_f_638_5270" x="-205" y="0" width="605" height="605" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_638_5270"/>
            </filter>
            </defs>
            </svg>
        </div>
    )
};

export default Blur2;