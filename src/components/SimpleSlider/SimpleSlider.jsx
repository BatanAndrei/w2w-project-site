import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './simpleSlider.module.scss';
import FotikSvg from '../../components/Svg/FotikSvg';
import Field from "../Field/Field";
import { useState } from "react";
import { useRef } from 'react';


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

    const [selectedFotoProduct1, setSelectedFotoProduct1] = useState(null);
    const [selectedFotoProduct2, setSelectedFotoProduct2] = useState(null);
    const [selectedFotoProduct3, setSelectedFotoProduct3] = useState(null);
    const [selectedFotoProduct4, setSelectedFotoProduct4] = useState(null);
    const [selectedFotoProduct5, setSelectedFotoProduct5] = useState(null);
    const [selectedFotoProduct6, setSelectedFotoProduct6] = useState(null);
    const filePicker1 = useRef(null);
    const filePicker2 = useRef(null);
    const filePicker3 = useRef(null);
    const filePicker4 = useRef(null);
    const filePicker5 = useRef(null);
    const filePicker6 = useRef(null);

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

    const chooseFotoForProduct1 = (e) => {
        const file1 = e.target.files[0];
        const reader = new FileReader();

        reader.onload = ev => {
            setSelectedFotoProduct1(ev.target.result);
        }
        reader.readAsDataURL(file1);
    };

    const chooseFotoForProduct2 = (e) => {
        const file2 = e.target.files[0];
        const reader = new FileReader();

        reader.onload = ev => {
            setSelectedFotoProduct2(ev.target.result);
        }
        reader.readAsDataURL(file2);
    };

    const chooseFotoForProduct3 = (e) => {
        const file3 = e.target.files[0];
        const reader = new FileReader();

        reader.onload = ev => {
            setSelectedFotoProduct3(ev.target.result);
        }
        reader.readAsDataURL(file3);
    };

    const chooseFotoForProduct4 = (e) => {
        const file4 = e.target.files[0];
        const reader = new FileReader();

        reader.onload = ev => {
            setSelectedFotoProduct4(ev.target.result);
        }
        reader.readAsDataURL(file4);
    };

    const chooseFotoForProduct5 = (e) => {
        const file5 = e.target.files[0];
        const reader = new FileReader();

        reader.onload = ev => {
            setSelectedFotoProduct5(ev.target.result);
        }
        reader.readAsDataURL(file5);
    };

    const chooseFotoForProduct6 = (e) => {
        const file6 = e.target.files[0];
        const reader = new FileReader();

        reader.onload = ev => {
            setSelectedFotoProduct6(ev.target.result);
        }
        reader.readAsDataURL(file6);
    };

    const handleClickPicker1 = () => {
        filePicker1.current.click();
    };

    const handleClickPicker2 = () => {
        filePicker2.current.click();
    };

    const handleClickPicker3 = () => {
        filePicker3.current.click();
    };

    const handleClickPicker4 = () => {
        filePicker4.current.click();
    };

    const handleClickPicker5 = () => {
        filePicker5.current.click();
    };

    const handleClickPicker6 = () => {
        filePicker6.current.click();
    };

    return (
        <Slider {...settings}>
            <div className={styles.marginItem}>
                <div onClick={handleClickPicker1} className={styles.wrapperCardInfo}>
                    <div className={styles.positionImage}>{!selectedFotoProduct1 ? <FotikSvg /> : <img src={selectedFotoProduct1} className={styles.image}></img>}</div>
                    <Field filePicker={filePicker1} accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForProduct1(e)}type='file' className={styles.fieldAtach}/>
                </div>
            </div>
            <div className={styles.marginItem}>
                <div onClick={handleClickPicker2} className={styles.wrapperCardInfo}>
                    <div className={styles.positionImage}>{!selectedFotoProduct2 ? <FotikSvg /> : <img src={selectedFotoProduct2} className={styles.image}></img>}</div>
                    <Field filePicker={filePicker2} accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForProduct2(e)}type='file' className={styles.fieldAtach}/>
                </div>
            </div>
            <div className={styles.marginItem}>
                <div onClick={handleClickPicker3} className={styles.wrapperCardInfo}>
                    <div className={styles.positionImage}>{!selectedFotoProduct3 ? <FotikSvg /> : <img src={selectedFotoProduct3} className={styles.image}></img>}</div>
                    <Field filePicker={filePicker3} accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForProduct3(e)}type='file' className={styles.fieldAtach}/>
                </div>
            </div>
            <div className={styles.marginItem}>
                <div onClick={handleClickPicker4} className={styles.wrapperCardInfo}>
                    <div className={styles.positionImage}>{!selectedFotoProduct4 ? <FotikSvg /> : <img src={selectedFotoProduct4} className={styles.image}></img>}</div>
                    <Field filePicker={filePicker4} accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForProduct4(e)}type='file' className={styles.fieldAtach}/>
                </div>
            </div>
            <div className={styles.marginItem}>
                <div onClick={handleClickPicker5} className={styles.wrapperCardInfo}>
                    <div className={styles.positionImage}>{!selectedFotoProduct5 ? <FotikSvg /> : <img src={selectedFotoProduct5} className={styles.image}></img>}</div>
                    <Field filePicker={filePicker5} accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForProduct5(e)}type='file' className={styles.fieldAtach}/>
                </div>
            </div>
            <div className={styles.marginItem}>
                <div onClick={handleClickPicker6} className={styles.wrapperCardInfo}>
                    <div className={styles.positionImage}>{!selectedFotoProduct6 ? <FotikSvg /> : <img src={selectedFotoProduct6} className={styles.image}></img>}</div>
                    <Field filePicker={filePicker6} accept='image/*,.png,.jpg,.gif,.web' change={(e) => chooseFotoForProduct6(e)}type='file' className={styles.fieldAtach}/>
                </div>
            </div>
        </Slider>
    );
}