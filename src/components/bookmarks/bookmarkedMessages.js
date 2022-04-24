import BookmarkedMessage from "./bookmarkedMessage";
import React from "react";
import * as service from "../../services/bookmarks-service"

const BookmarkedMessages =({messages=[], refreshMessages}) => {
    // const bookmarkMessage =(message) =>{
    //     service.userBookmarksMessage("me", message._id)
    //         .then(refreshMessages)
    //         .catch(e => alert(e))
    // }
return (
    <ul className="ttr-messages list-group align-items-start" style={{paddingTop: '10px', borderRadius: '0px'}}>
        {
            messages.map && messages.map(message =>
                <BookmarkedMessage
                    key={message._id}
                    message={message}
                />)
        }
    </ul>
)
}

export default BookmarkedMessages