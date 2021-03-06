/**
 * @file Implements a contactable user instance in the message screen
 */

import React from "react"
import {default as UserMessageButton} from './userMessageButton';
import "./user.css"

/**
 * Implements a contact user instance
 * @param user Contactable user
 * @returns {JSX.Element} Single instance of contactable user
 * @constructor
 */
const User = ({user, deleteUser, handleOnUserSelected}) =>{

    const handleOnUserClicked = (e) => {
        e.stopPropagation()
        e.preventDefault()
        handleOnUserSelected(user)
    }
    return(
        <div className='ttr-messages-user' onClick={handleOnUserClicked}>
            <div>
                {
                    user.username &&
                    <img src={`../images/${user.username}.jpg`} alt = "abc"
                         className="ttr-messages-user-image"/>
                }
            </div>
            <span className = "ttr-messages-username">
                    {user.username}
            </span>
            <span>
            {/*<UserMessageButton*/}
            {/*        user={user}*/}
            {/*        handleOnUserSelected={handleOnUserSelected}>*/}
            {/*        Chat*/}
            {/*</UserMessageButton>*/}
                </span>
        </div>

    );
}
export default User;