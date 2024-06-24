import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './brandSlider.module.scss';
import SliderBarandOne from '../Svg/SliderBarandOne';
import SliderBarandTwo from "../Svg/SliderBarandTwo";
import SliderBarandThree from "../Svg/SliderBarandTree";


function ArrowPrev(props) {
    const { className, style, onClick } = props;
    
    return (
        <div
            className={className+' '+styles.arrow+' '+styles.slick_prev}
            style={{ ...style, display: "block", background: "#dadada"}}
            onClick={onClick}
        />
    );
}; 

function ArrowNext(props) {
    const { className, style, onClick } = props;
    
    return (
        <div
            className={className+' '+styles.arrow+' '+styles.slick_next}
            style={{ ...style, display: "block", background: "#dadada"}}
            onClick={onClick}
        />
    );
}; 



export default function BarandSlider({ src, classNameWrapperCard, classNameSizeCard }) {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1235,
                settings: {
                    slidesToShow: 2.5,
            }
        }
        ]
    };

    return (
        <Slider {...settings}>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <div className={styles.image}><SliderBarandOne/></div>
                        <h2 className={styles.title}>Ваша Николаша</h2>
                        <h2 className={styles.subTitle}>Дети</h2>
                    </div>
                </div>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <div className={styles.image}><SliderBarandTwo/></div>
                        <h2 className={styles.title}>Kristoms</h2>
                        <h2 className={styles.subTitle}>Дети</h2>
                    </div>
                </div>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <div className={styles.image}><SliderBarandThree/></div>
                        <h2 className={styles.title}>Flash epil</h2>
                        <h2 className={styles.subTitle}>Красота/здоровье</h2>
                    </div>
                </div>
        </Slider>
    );
}