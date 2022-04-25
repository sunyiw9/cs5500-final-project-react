import {default as MessageLine} from './messageLine';
import {useEffect, useRef, useState} from "react";
import * as messageService from "../../services/message-service";
import * as bookmarkService from "../../services/bookmarks-service";
import "./message-window.css";

const MessageWindow = ({user, selectedUser}) => {

    const [messages, setMessages] = useState([]);
    const scrollRef = useRef();

    const fetchMessage = () => {
        messageService.findAllMessagesBetweenUsers(user._id, selectedUser._id)
            .then((fetchedMessages) => {
                setMessages(fetchedMessages);
            })
    };

    const deleteOneMessage = (mid) => {
        messageService.deleteOneMessage(mid)
            .then(fetchMessage)
    };

    const bookmarkMessage = (mid) => {
        bookmarkService.userBookmarksMessage(user._id, mid)
            .then(fetchMessage)
            .catch(e => {
                console.error(e)
            })
    }

    // fetch initial message
    useEffect(() => {
        fetchMessage();
    }, [selectedUser._id])

    // fetch every 2 sec, time can be modified
    useEffect(() => {
        const interval = window.setInterval(() => {
            fetchMessage();
        }, 2000);

        return () => clearInterval(interval);
    }, [selectedUser._id])

    useEffect( () => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages])

    return (
        <div className="scroll-bg">
            <div className="ttr-twitter-message-window-username">
                {selectedUser.username}
            </div>
            <div className="scroll-div">
            {
                messages &&
                messages.map((message) => (
                    <div ref={scrollRef}>
                        <MessageLine userName={((message || {}).from || {}).username}
                                     message={message.message}
                                     sentOn={message.sentOn}
                                     refreshMessage={deleteOneMessage}
                                     mid={message}
                                     key={message._id}
                                    bookmarkMessage={bookmarkMessage}/>
                    </div>
                    ))
            }
            </div>
        </div>
    )
}

export default MessageWindow;