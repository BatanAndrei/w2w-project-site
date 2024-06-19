import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './simpleSlider.module.scss';
import FotikSvg from '../../components/Svg/FotikSvg';


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



export default function SimpleSlider() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1235,
                settings: {
                    slidesToShow: 3.5,
            }
        }
        ]
    };

    return (
        <Slider {...settings}>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <FotikSvg />
                </div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <FotikSvg />
                </div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <FotikSvg />
                </div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <FotikSvg />
                </div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <FotikSvg />
                </div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <FotikSvg />
                </div>
            </div>
        </Slider>
    );
}