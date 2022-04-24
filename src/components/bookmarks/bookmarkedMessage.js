import React from "react";
// import {useNavigate, Link} from "react-router-dom";
import "./message-bookmark.css"
const BookmarkedMessage = ({message}) =>{
    return(
        <li className='ttr-bookmarks-message'>
            <div>From: {message.from.username}</div>
            <div>To:{message.to.username}</div>
            <div>Sent On: {message.sentOn}</div>
            <div>Content: {message.message}</div>
        </li>
    )
}

export default BookmarkedMessage;