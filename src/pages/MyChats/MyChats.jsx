import styles from './myChats.module.scss'
import { Link } from 'react-router-dom';
import SearchIconSvg from '../../components/Svg/SearchIconSvg';
import MenuDotsSvg from '../../components/Svg/MenuDotsSvg';
import EventIconSvg from '../../components/Svg/EventIconSvg';
import BrandIconSvg from '../../components/Svg/BrandIconSvg';
import ProfileIconSvg from '../../components/Svg/ProfileIconSvg';
import HomeIconSvg from '../../components/Svg/HomeIconSvg';
import ChatIconSvg from '../../components/Svg/ChatIconSvg';


const MyChats = () => {

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
                <Link to='/chatRoom'><div className={styles.chat}></div></Link>
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