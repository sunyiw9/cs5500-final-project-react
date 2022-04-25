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