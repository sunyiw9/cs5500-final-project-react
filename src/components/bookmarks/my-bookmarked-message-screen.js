import * as service from "../../services/bookmarks-service";
import {useEffect, useState} from "react";
import BookmarkedMessages from "./bookmarkedMessages";

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