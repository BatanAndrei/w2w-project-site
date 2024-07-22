import { Client } from '@stomp/stompjs';
import { useEffect } from 'react';
import styles from './chatRoom.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';


const Chat = () => {

    const navigate = useNavigate();
    const chatRoomId =1;

    const client = new Client({

        brokerURL: 'wss://dipdeepcode.ru/ws',
        heartbeatIncoming: 30000,
        heartbeatOutgoing: 0,
        onConnect: () => {

            client.subscribe('/topic/tech', techMessage => {
                console.log(`Received tech message: ${techMessage.body}`)
            });

            client.subscribe('/topic/messages/' + chatRoomId, (chatMessage) => {
                console.log(`Received chat message: ${chatMessage.body}`);
            })

        },
    });

    useEffect(() => {
        client.activate();
    }, []);

    const backToMyChatsPageAndDisconnectChat = () => {
        client.deactivate();
        navigate('/myChats');
    };

    return (
        <div className={styles.positionButton}>
            <Button className={styles.button} click={backToMyChatsPageAndDisconnectChat} name={'НАЗАД В МОИ ЧАТЫ'}/>
        </div>
    )
};

export default Chat;