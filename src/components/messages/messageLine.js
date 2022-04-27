/**
 * @file Component renders each single line of the message
 */
import * as messageService from "../../services/message-service";
import React, {useEffect, useState} from "react";
import "./messageLine.css";
import {findBookmarkByUserAndMessage} from "../../services/bookmarks-service";

const MessageLine = ({userName, message, sentOn, refreshMessage, mid, userName1, bookmarkMessage = () => {}, fetchMessageBookmark}) => {
    const time = new Date(sentOn).toLocaleString();

    // This in the beginning, return bookmarks when this message is bookmarked
    // return false if this message is not bookmarked
    useEffect(() => {
       fetchMessageBookmark(mid._id).then(res => {
           if (res) {
               setBookmarks(true);
           } else {
               setBookmarks(false);
           }
       }).catch(err => {
           console.log('error:', err);
       });
    },[]);

    const [bookmarks, setBookmarks] = useState(false);

    // When clicking, first, inserts message into user's bookmarks collection (or delete it)
    // Then, check if this message is bookmarked (if it is created)
    const bookmarkHandle = (mid) => {
        bookmarkMessage(mid).then(res => {
            if (res === 'Created') {
                setBookmarks(true);
            } else {
                setBookmarks(false);
            }
        }).catch(err => {
            console.log('error:', err);
        });
    }

    return (
        <div className="container">
        <div style={{marginBottom:"15px"}}>
            <div>{userName} {time}
                <i onClick={() => refreshMessage(mid._id)} className="fas fa-remove fa-1x fa-pull-right"></i>
                <span className="ttr-star-button" onClick = {() => bookmarkHandle(mid._id)}>
                    {bookmarks ?
                        <i className="fa fa-star fa-1x fa-pull-right me-2" style={{color: "yellow"}}></i> :
                        <i className="fa fa-star fa-1x fa-pull-right me-2"></i>
                    }
                </span>
            </div>
                { userName === userName1 && <div className = "ttr-message-1 push-right">{message}</div>}
                { userName !== userName1 && <div className = "ttr-message-2"> {message}</div>}
        </div>
        </div>
    )
}

export default MessageLine;