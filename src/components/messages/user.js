import React from "react"
import {default as UserMessageButton} from './userMessageButton';

const User = ({user, deleteUser, handleOnUserSelected}) =>{
    return(
        <div className='ttr-message-user' style={{width:'32%'}}>
            <li className="ttr-messages list-group-item d-flex rounded-10">
                <div>
                    {
                        user.username &&
                        <img src={`../images/${user.username}.jpg`} alt = "abc"
                             className="ttr-width-50px rounded-circle"/>
                    }
                </div>
                <div className = "ttr-messages" style={{paddingLeft:"10px", paddingTop:"5px"}}>
                    {user.username}
                </div>

                <UserMessageButton
                    user={user}
                    handleOnUserSelected={handleOnUserSelected}
                >
                    Chat
                </UserMessageButton>
            </li>
        </div>

    );
}
export default User;