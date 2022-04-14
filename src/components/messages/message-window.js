import {default as MessageLine} from './messageLine';
import {useEffect, useState} from "react";
import * as messageService from "../../services/message-service";

const MessageWindow = ({user, selectedUser}) => {

    const [messages, setMessages] = useState([]);

    const fetchMessage = () => {
        messageService.findAllMessagesBetweenUsers(user._id, selectedUser._id)
            .then((fetchedMessages) => {
                setMessages(fetchedMessages);
            })
    };

    // fetch initial message
    useEffect(() => {
        fetchMessage();
    }, [selectedUser._id])

    // fetch every 5 sec, time can be modified
    useEffect(() => {
        const interval = window.setInterval(() => {
            fetchMessage();
        }, 5000);

        return () => clearInterval(interval);
    }, [selectedUser._id])


    return (
        <div>
            {
                messages &&
                messages.map((message) => <MessageLine userName={((message || {}).from || {}).username} message={message.message} key={message._id}/>)
            }
        </div>
    )
}

export default MessageWindow;