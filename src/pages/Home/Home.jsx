import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import LogoSvg from '../../components/Svg/LogoSvg';
import BellHeaderSvg from '../../components/Svg/BellHeaderSvg';
import Button from '../../components/Button/Button';
import { nameButtonCollabNow, nameButtonKnowYourself, nameButtonGetFast } from '../../datas/datas';
import SaturnSvg from '../../components/Svg/SaturnSvg';
import CollabWeekSvg from '../../components/Svg/CollabWeekSvg';
import ClockSvg from '../../components/Svg/ClockSvg';
import SmallClockSvg from '../../components/Svg/SmallClockSvg';
import ArticleSlider from '../../components/ArticleSlider/ArticleSlider';
import BrandSlider from '../../components/BrandSlider/BrandSlider';
import GroupCardToro from '../../components/Svg/GroupCardToroSvg';
import SmallCalendar from '../../components/Svg/SmallCalendar';
import ProgressLine from '../../components/Svg/ProgressLine';
import HomeIconSvg from '../../components/Svg/HomeIconSvg';
import EventIconSvg from '../../components/Svg/EventIconSvg';
import BrandIconSvg from '../../components/Svg/BrandIconSvg';
import ChatIconSvg from '../../components/Svg/ChatIconSvg';
import ProfileIconSvg from '../../components/Svg/ProfileIconSvg';


const Home = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headWrapper}>
                    <div className={styles.opacity}></div>
                    <LogoSvg colorPurple={true}/>
                    <BellHeaderSvg/>
                </div>
                <div className={styles.subscribeWrapper}>
                    <div className={styles.ganaralSubscribe}>
                        <div className={styles.headSubscribe}>
                            <h2 className={styles.titleSubscribe}>Оформи подписку со скидкой 20%</h2>
                        </div>
                        <div className={styles.bodySubscribe}>
                            <h3 className={styles.subTitle}>Управляй своей судьбой</h3>
                            <h3 className={styles.description}>Присоединяйся к сообществу<br/> и находи лучших партнеров</h3>
                            <div className={styles.wrapperButtonSaturn}>
                                <Button click={() => alert('Заколлабиться?')} className={styles.button} name={nameButtonCollabNow}/>
                                <div className={styles.saturnSvg}><SaturnSvg/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.collabaWeekWrapper}>
                    <div className={styles.generalCollabaWeek}>
                        <h2 className={styles.titlCollabaWeek}>Коллаба недели</h2>
                        <div className={styles.positionSvg}><CollabWeekSvg/></div>
                    </div>
                </div>
                <div className={styles.goTestWrapper}>
                    <div className={styles.generalGoTest}>
                        <div className={styles.wrapperButtonClock}>
                            <Button click={() => alert('Узнай себя')} className={styles.buttonTest} name={nameButtonKnowYourself}/>
                            <div className={styles.clock}><ClockSvg/></div>
                        </div>
                        <h2 className={styles.titleTest}>Пройди тест на тип личности</h2>
                        <div className={styles.positionHowMinutes}><SmallClockSvg/><h2 className={styles.howMinutes}>10 минут</h2></div>
                    </div>
                </div>
                <div className={styles.sliderArticleWrapper}>
                    <div className={styles.generalSliderArticle}>
                        <h2 className={styles.titleSlider}>Полезные статьи</h2>
                        <div className={styles.wrapperSlider}>
                            <ArticleSlider classNameWrapperCard={styles.wrapperCard} classNameSizeCard={styles.sizeCard} classNameImage={styles.image} classNameDescription={styles.description}/>
                        </div>
                    </div>
                </div>
                <div className={styles.getBookWrapper}>
                    <div className={styles.generalGetBook}>
                        <div className={styles.positionCardToro}><GroupCardToro/></div>
                        <h2 className={styles.titleGetBook}>Получи Idea Book Collaboration и вдохновляйся на коллабу</h2>
                        <Button click={() => alert('Забрать скорее')} className={styles.buttonGetBoook} name={nameButtonGetFast}/>
                    </div>
                </div>
                <div className={styles.sliderBrandWrapper}>
                    <div className={styles.generalSliderBrand}>
                        <h2 className={styles.titleSlider}>Популярные бренды</h2>
                        <div className={styles.wrapperSliderBrand}>
                            <BrandSlider classNameWrapperCard={styles.wrapperCard} classNameSizeCard={styles.sizeCard}/>
                        </div>
                    </div>
                </div>
                <div className={styles.connectCommunityWrapper}>
                    <div className={styles.generalConnectCommunity}>
                        <h2 className={styles.titleCommunity}>Присоединяйся к сообществу<br/> и находи лучших партнеров</h2>
                        <div className={styles.progressLine}><ProgressLine/></div>
                        <div className={styles.positionProgress}><SmallCalendar/><h2 className={styles.textProgress}>Прогресс заполнения анкеты</h2></div>
                    </div>
                </div>
                <div className={styles.footerWrapper}>
                    <div className={styles.generalFooter}>
                        <div className={styles.iconFooter}><Link to='#'><HomeIconSvg checked={true}/></Link></div>
                        <div className={styles.iconFooter}><Link to='#'><EventIconSvg/></Link></div>
                        <div className={styles.iconFooter}><Link to='#'><BrandIconSvg/></Link></div>
                        <div className={styles.iconFooter}><Link to='/myChats'><ChatIconSvg/></Link></div>
                        <div className={styles.iconFooter}><Link to='#'><ProfileIconSvg/></Link></div>
                    </div>
                </div>
                <div className={styles.psevdoBlock}></div>
            </div>
        </>
    )
};

export default Home;