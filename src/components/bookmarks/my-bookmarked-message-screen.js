/**
 * @file Implements my-bookmarked-message screen where display all bookmarked messages by logged in user
 */

import * as service from "../../services/bookmarks-service";
import {useEffect, useState} from "react";
import BookmarkedMessages from "./bookmarkedMessages";

/**
 * Implements my-bookmarked-message screen
 * @returns {JSX.Element} a screen of bookmarked message list
 * @constructor
 */
const MyBookmarkedMessages = () =>{
    const [bookmarkMessages, setBookmarkMessages] = useState([]);
    const findBookmarkedMessage = () =>
        service.findAllMessagesBookmarkedByUser("me")
            .then((messages) => setBookmarkMessages(messages));
    useEffect(findBookmarkedMessage , []);
    return(
        <div className='ttr-bookmarks-screen'>
            <BookmarkedMessages messages ={bookmarkMessages}
            refreshMessages ={findBookmarkedMessage}/>
        </div>
    )

}

export default MyBookmarkedMessages;