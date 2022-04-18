import React from "react"
import {default as UserMessageButton} from './userMessageButton';
import "./user.css"
const User = ({user, deleteUser, handleOnUserSelected}) =>{
    return(
        <div className='ttr-messages-user'>
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
            <UserMessageButton
                    user={user}
                    handleOnUserSelected={handleOnUserSelected}>
                    Chat
            </UserMessageButton>
        </div>

    );
}
export default User;