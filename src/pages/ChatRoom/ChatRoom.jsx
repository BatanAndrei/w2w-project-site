import { Client, Message  } from '@stomp/stompjs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './chatRoom.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';


const Chat = () => {

    const navigate = useNavigate();

    const client = new Client({

        brokerURL: 'wss://localhost:15674/ws',
        onConnect: () => {

            client.subscribe('/topic/test01', message =>
            console.log(`Received: ${message.body}`)
            );

            client.publish({ destination: '/topic/test01', body: 'First Message' });
        },
    });

    useEffect(() => {
        client.activate();
    }, []);

    const backToMyChatsPageAndDisconectChat = () => {
        client.deactivate();
        navigate('/myChats');
    };

    return (
        <div className={styles.positionButton}>
            <Button className={styles.button} click={backToMyChatsPageAndDisconectChat} name={'НАЗАД В МОИ ЧАТЫ'}/>
        </div>
    )
};

export default Chat;