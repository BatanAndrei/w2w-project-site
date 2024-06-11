import styles from './theHeaderQuestionnier.module.scss';
import { Link } from 'react-router-dom';
import InfoSvg from '../../components/Svg/InfoSvg';
import HorizontLineSvg from '../../components/Svg/HorizontLineSvg';


const TheHeaderQuestionnier = () => {

    return (
        <div className={styles.containerHeader}>
            <div className={styles.wrapperTitleHeader}>
                <h1 className={styles.titleQuestionnier}>АНКЕТА БРЕНДА</h1>
                <Link className={styles.infoAboutQuestionnier}><InfoSvg/></Link>
            </div>
            <div className={styles.pageQuestionnierHeader}>
                {Array.from({length: 4}).map((line, index) => { 
                    return (
                    <Link key={index} to={(index === 0 && '/brand-choice/brand-questionnire-first') || (index === 1 && '/brand-choice/brand-questionnire-second') || (index === 2 && '/brand-choice/brand-questionnire-third') || (index === 3 && '/brand-choice/brand-questionnire-fouth')} className={styles.link}><HorizontLineSvg purple={index}/></Link>
                    )
                })}
            </div>
        </div>
    )
};

export default TheHeaderQuestionnier;