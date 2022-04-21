/**
 * Component renders each single line of the message
 */
import * as messageService from "../../services/message-service";
import React from "react";

const MessageLine = ({userName, message, sentOn, refreshMessage, mid}) => {
    const time = new Date(sentOn).toLocaleString();

    // const deleteOneMessage = () => {
    //     messageService.deleteOneMessage(mid._id)
    //         .then(refreshMessage);
    // };

    return (
        <div style={{marginBottom:"15px"}}>
            <div>{userName} {time}
            <i onClick={() => refreshMessage(mid._id)} className="fas fa-remove fa-1x fa-pull-right"></i>
            </div>
            <div>{message}</div>
        </div>
    )
}

export default MessageLine;