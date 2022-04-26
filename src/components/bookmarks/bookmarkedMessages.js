/**
 * @file Implements a list of bookmarked Message in the Bookmark screen
 */
import BookmarkedMessage from "./bookmarkedMessage";
import React from "react";
import "./message-bookmark.css"

/**
 * Implements a list of bookmarked messages component for bookmarked message screen
 * @param messages bookmarked messages
 * @returns {JSX.Element} List of bookmarked messages
 * @constructor
 */
const BookmarkedMessages =({messages=[], refreshMessages}) => {
    // const bookmarkMessage =(message) =>{
    //     service.userBookmarksMessage("me", message._id)
    //         .then(refreshMessages)
    //         .catch(e => alert(e))
    // }
return (
    <div>
        {
            messages.map && messages.map(message =>
                <BookmarkedMessage
                    key={message._id}
                    message={message}
                />)
        }
    </div>
)
}

export default BookmarkedMessages