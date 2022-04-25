import React from "react";
// import {useNavigate, Link} from "react-router-dom";
import "./message-bookmark.css"
const BookmarkedMessage = ({message}) =>{
    return(
        <div className='ttr-bookmarks-message'>
            <div className='ttr-bookmarks-message-content'>
            <div> From: {message.from.username}</div>
            <div> To:{message.to.username}</div>
            <div> Sent On: {message.sentOn}</div>
            <div> Content: {message.message}</div>
            </div>
        </div>
    )
}

export default BookmarkedMessage;