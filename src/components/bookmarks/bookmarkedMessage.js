import React from "react";
// import {useNavigate, Link} from "react-router-dom";

const BookmarkedMessage = ({message}) =>{
    return(
        <li>
            <div>
                From: {message.from.username}
                <div>
                To:{message.to.username}
                </div>
            </div>
            <div>
                Content: {message.message}
            </div>
        </li>
    )
}

export default BookmarkedMessage;