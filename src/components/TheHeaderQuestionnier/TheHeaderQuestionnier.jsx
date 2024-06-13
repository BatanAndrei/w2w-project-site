import styles from './theHeaderQuestionnier.module.scss';
import { Link } from 'react-router-dom';
import InfoSvg from '../../components/Svg/InfoSvg';
import HorizontLineSvg from '../../components/Svg/HorizontLineSvg';
import { lineProgressBar } from '../../datas/datas';
import { useState } from 'react';


const TheHeaderQuestionnier = () => {

    const [lineActive, setLineActive] = useState([])

    const choseProgressBar = (line) => {
        const id = line.id
        const lineActive = lineProgressBar.map((line) => line.id === id ? {...line, active: true} : line);
        setLineActive(lineActive);
    }

    return (
        <div className={styles.containerHeader}>
            <div className={styles.wrapperTitleHeader}>
                <h1 className={styles.titleQuestionnier}>АНКЕТА БРЕНДА</h1>
                <Link className={styles.infoAboutQuestionnier}><InfoSvg/></Link>
            </div>
            <div className={styles.pageQuestionnierHeader}>
                {lineActive.map((line, index) => { 
                    return (
                    <Link onClick={choseProgressBar(line)} key={index} to={(index === 0 && '/brand-choice/brand-questionnire-first') || (index === 1 && '/brand-choice/brand-questionnire-second') || (index === 2 && '/brand-choice/brand-questionnire-third') || (index === 3 && '/brand-choice/brand-questionnire-fouth')} className={styles.link}><HorizontLineSvg purple={line.active}/></Link>
                    )
                })}
            </div>
        </div>
    )
};

export default TheHeaderQuestionnier;