/**
 * @file Implements a bookmarked Message instance in the Bookmark screen
 */

import React from "react";
import "./message-bookmark.css"

/**
 * Implements single bookmarked message component for bookmarked message screen
 * @param message The bookmarked message
 * @returns {JSX.Element} Single instance of bookmarked message
 * @constructor
 */
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