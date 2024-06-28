import styles from './myChats.module.scss'
import { Link } from 'react-router-dom';
import SearchIconSvg from '../../components/Svg/SearchIconSvg';
import MenuDotsSvg from '../../components/Svg/MenuDotsSvg';
import EventIconSvg from '../../components/Svg/EventIconSvg';
import BrandIconSvg from '../../components/Svg/BrandIconSvg';
import ProfileIconSvg from '../../components/Svg/ProfileIconSvg';
import HomeIconSvg from '../../components/Svg/HomeIconSvg';
import ChatIconSvg from '../../components/Svg/ChatIconSvg';
import { useEffect } from 'react';
import { getSummary } from '../../api/getSummary';
import { useDispatch, useSelector } from 'react-redux';
import { selectResponseSummary, selectStatusLoadSummary } from '../../redux/selectors/selectors';
import { getLogo } from '../../api/getLogo';


const MyChats = () => {

    const dispatch = useDispatch();
    const responseSummary = useSelector(selectResponseSummary);
    const statusLoadSummary = useSelector(selectStatusLoadSummary);
    const dataChats = responseSummary.data;
    const responseStatusSummary = responseSummary.status;
    useEffect(() => {
        dispatch(getSummary());
    }, []);

    useEffect(() => {
        if(responseStatusSummary === 200 && statusLoadSummary === 'resolved') {
            dataChats.forEach(element => {
                dispatch(getLogo(element.logoImage.id))
            });
        }
        }, [statusLoadSummary]);
        
    return (
        <div className={styles.container}>
            <div className={styles.headChatPage}>
                <h1 className={styles.titleChats}>МОИ ЧАТЫ</h1>
                <div className={styles.wrapperSvg}>
                    <Link className={styles.search}><SearchIconSvg/></Link>
                    <Link className={styles.dotsMenu}><MenuDotsSvg/></Link>
                </div>
            </div>
            <div className={styles.wrapperInfoAllChats}>
                
            </div>
            <div className={styles.wrapperChatsArea}>
                {dataChats?.map((item, index) => 
                    <Link key={index} to='/chatRoom'><div className={styles.wrapperLogo} ><img className={styles.logoChat} src={`https://dipdeepcode.ru/api/image/${item.logoImage.id}`}/></div></Link>
                )}
            </div>
            <div className={styles.wrapperFooter}>
                <div className={styles.iconFooter}><Link to='/'><HomeIconSvg/></Link></div>
                <div className={styles.iconFooter}><Link to='#'><EventIconSvg/></Link></div>
                <div className={styles.iconFooter}><Link to='#'><BrandIconSvg/></Link></div>
                <div className={styles.iconFooter}><Link to='#'><ChatIconSvg checked={true}/></Link></div>
                <div className={styles.iconFooter}><Link to='#'><ProfileIconSvg/></Link></div>
            </div>
        </div>
    )
};

export default MyChats;