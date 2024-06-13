import styles from './theHeaderQuestionnier.module.scss';
import { Link } from 'react-router-dom';
import InfoSvg from '../../components/Svg/InfoSvg';
import HorizontLineSvg from '../../components/Svg/HorizontLineSvg';
import { dataLineProgressBar } from '../../datas/datas';
import { useEffect, useState } from 'react';


const TheHeaderQuestionnier = () => {

    const [lineProgressBar, setLineProgressBar] = useState(dataLineProgressBar);

    const choseProgressBar = (line) => {
        const id = line.id
        if(id) {
        const lineActive = lineProgressBar.map((line, index) => line.id === id ? {...line, active: line.active = true} : line);
        setLineProgressBar(lineActive);
        }

        if(id) {
            const lineActive = lineProgressBar.map((line, index) => index <= id ? {...line, active: line.active = true} : line);
            setLineProgressBar(lineActive);
            }

        if((id)){
        const lineActive = lineProgressBar.map((line , index) => index >= id ? {...line, active: line.active = false} : line);
        setLineProgressBar(lineActive);
        }
    };

    return (
        <div className={styles.containerHeader}>
            <div className={styles.wrapperTitleHeader}>
                <h1 className={styles.titleQuestionnier}>АНКЕТА БРЕНДА</h1>
                <Link className={styles.infoAboutQuestionnier}><InfoSvg/></Link>
            </div>
            <div className={styles.pageQuestionnierHeader}>
                {lineProgressBar.map((line, index) => { 
                    return (
                    <Link onClick={() => choseProgressBar(line)} key={index} to={(index === 0 && '/brand-choice/brand-questionnire-first') || (index === 1 && '/brand-choice/brand-questionnire-second') || (index === 2 && '/brand-choice/brand-questionnire-third') || (index === 3 && '/brand-choice/brand-questionnire-fouth')} className={styles.link}><HorizontLineSvg purple={line.active}/></Link>
                    )
                })}
            </div>
        </div>
    )
};

export default TheHeaderQuestionnier;