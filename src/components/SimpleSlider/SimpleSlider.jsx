import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './simpleSlider.module.scss';
import FotikSvg from '../../components/Svg/FotikSvg';


function Arrow(props) {
    const { className, style, onClick } = props;
    
    return (
        <div
            className={className+' '+styles.arrow}
            style={{ ...style, display: "block", background: "#dadada" }}
            onClick={onClick}
        />
    );
}; 



export default function SimpleSlider() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
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