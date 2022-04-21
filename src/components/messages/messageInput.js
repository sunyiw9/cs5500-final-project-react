import {default as MessageLine} from './messageLine';
import {useEffect, useState} from "react";
import * as messageService from "../../services/message-service";
import Picker from "emoji-picker-react";
import "./messageInput.css";

const MessageInput = ({user, selectedUser}) => {

    const [message, setMessage] = useState(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const sendMessage = () => {
        // message is an object of Message type
        messageService.sendMessage(user._id, selectedUser._id, {message : message})
            .then((fetchedMessages) => {
                // after send the message, set the input to blank
                setMessage('');
                console.log(fetchedMessages);
            })
    };

    const handleEmojiClick = (event, emoji) => {
        setMessage(prevInput => prevInput + emoji.emoji);
        setShowEmojiPicker(false);
    };

    return (
        <div>
            <div className="picker-container">
            <input
                className="input-style"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Message ... "
            />
            <img
                className="emoji-icon"
                src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                onClick={() => setShowEmojiPicker(val => !val)}  alt=""/>
            {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
            <button className="btn btn-primary mb-2" onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default MessageInput;