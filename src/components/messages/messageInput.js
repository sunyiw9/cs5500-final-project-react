import {default as MessageLine} from './messageLine';
import {useEffect, useState} from "react";
import * as messageService from "../../services/message-service";

const MessageInput = ({user, selectedUser}) => {

    const [message, setMessage] = useState(null);

    const sendMessage = () => {
        // message is an object of Message type
        messageService.sendMessage(user._id, selectedUser._id, {message : message})
            .then((fetchedMessages) => {
                // after send the message, set the input to blank
                setMessage('');
                console.log(fetchedMessages);
            })
    };

    return (
        <div>
            <input
                className="mb-2 form-control"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Message ... "
            />
            <button className="btn btn-primary mb-5" onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageInput;