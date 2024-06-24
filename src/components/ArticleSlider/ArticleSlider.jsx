import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './articleSlider.module.scss';


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



export default function ArticleSlider({ src, classNameWrapperCard, classNameSizeCard, classNameImage, classNameDescription }) {

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
                    slidesToShow: 1.1,
            }
        }
        ]
    };

    return (
        <Slider {...settings}>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <img src={src} className={classNameImage}></img>
                        <div className={classNameDescription}><h2 className={styles.text}>Коллаба  продвигает бизнес в самом<br/> наилучшем образе, выбирайте нас и...</h2></div>
                    </div>
                </div>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <img src={src} className={classNameImage}></img>
                        <div className={classNameDescription}><h2 className={styles.text}>Коллаба  продвигает бизнес в самом<br/> наилучшем образе, выбирайте нас и...</h2></div>
                    </div>
                </div>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <img src={src} className={classNameImage}></img>
                        <div className={classNameDescription}><h2 className={styles.text}>Коллаба  продвигает бизнес в самом<br/> наилучшем образе, выбирайте нас и...</h2></div>
                    </div>
                </div>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <img src={src} className={classNameImage}></img>
                        <div className={classNameDescription}><h2 className={styles.text}>Коллаба  продвигает бизнес в самом<br/> наилучшем образе, выбирайте нас и...</h2></div>
                    </div>
                </div>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <img src={src} className={classNameImage}></img>
                        <div className={classNameDescription}><h2 className={styles.text}>Коллаба  продвигает бизнес в самом<br/> наилучшем образе, выбирайте нас и...</h2></div>
                    </div>
                </div>
                <div className={classNameWrapperCard}>
                    <div className={classNameSizeCard}>
                        <img src={src} className={classNameImage}></img>
                        <div className={classNameDescription}><h2 className={styles.text}>Коллаба  продвигает бизнес в самом<br/> наилучшем образе, выбирайте нас и...</h2></div>
                    </div>
                </div>
        </Slider>
    );
}