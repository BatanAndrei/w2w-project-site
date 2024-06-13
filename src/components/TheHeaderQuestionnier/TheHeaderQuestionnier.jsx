import styles from './theHeaderQuestionnier.module.scss';
import { Link } from 'react-router-dom';
import InfoSvg from '../../components/Svg/InfoSvg';
import HorizontLineSvg from '../../components/Svg/HorizontLineSvg';


const TheHeaderQuestionnier = ({ lineOwn, lineTwo, lineThree, lineFour }) => {
    return (
        <div className={styles.containerHeader}>
            <div className={styles.wrapperTitleHeader}>
                <h1 className={styles.titleQuestionnier}>АНКЕТА БРЕНДА</h1>
                <Link className={styles.infoAboutQuestionnier}><InfoSvg/></Link>
            </div>
            <div className={styles.wrapperProgressBar}>
                <Link to='/brand-choice/brand-questionnire-first' className={styles.link}><HorizontLineSvg purple={lineOwn && true} /></Link>
                <Link to='/brand-choice/brand-questionnire-second' className={styles.link}><HorizontLineSvg purple={(lineOwn && lineTwo) && true} /></Link>
                <Link to='/brand-choice/brand-questionnire-third' className={styles.link}><HorizontLineSvg purple={(lineOwn && lineTwo && lineThree) && true} /></Link>
                <Link to='/brand-choice/brand-questionnire-fouth' className={styles.link}><HorizontLineSvg purple={(lineOwn && lineTwo && lineThree && lineFour) && true} /></Link>
            </div>
        </div>
    )
};

export default TheHeaderQuestionnier;