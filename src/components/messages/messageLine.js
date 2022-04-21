/**
 * Component renders each single line of the message
 */
import * as messageService from "../../services/message-service";
import React, {useEffect, useState} from "react";
import "./messageLine.css";

const MessageLine = ({userName, message, sentOn, refreshMessage, mid, userName1}) => {
    const time = new Date(sentOn).toLocaleString();

    // const deleteOneMessage = () => {
    //     messageService.deleteOneMessage(mid._id)
    //         .then(refreshMessage);
    // };

    return (
        <div className="container">
        <div style={{marginBottom:"15px"}}>
            <div>{userName} {time}
            <i onClick={() => refreshMessage(mid._id)} className="fas fa-remove fa-1x fa-pull-right"></i>
            </div>
                { userName === userName1 && <div className = "ttr-message-1 push-right">{message}</div>}
                { userName !== userName1 && <div className = "ttr-message-2"> {message}</div>}
        </div>
        </div>
    )
}

export default MessageLine;