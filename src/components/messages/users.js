import React from "react";
import {useEffect, useState} from "react";
import User from "./user";
import * as userService from "../../services/users-service";
import "./message-window.css"
import MessageWindow from "./message-window";
import MessageInput from "./messageInput";
import "./user.css"


const Users = ({profile, users = [], refreshUsers}) => {
    const deleteUser =(uid) =>
        userService.deleteUser(uid)
            .then(refreshUsers);

    // current selected user, the receiver of the message
    const[selectedUser, setSelectedUser] = useState(null);

    // adjust format using flex
    return(
        <div style={{display : 'flex'}}>
            <ul className="ttr-messages list-group align-items-start" style={{paddingTop:'10px', borderRadius:'0px'}}>
                {
                    users.map && users.map(user =>
                                               <User
                                                   key={user._id}
                                                   deleteUser={deleteUser}
                                                   handleOnUserSelected={setSelectedUser}
                                                   user={user}
                                               />)
                }
            </ul>
            <div className= "ttr-message-window">
                {selectedUser &&
                 <MessageWindow user={profile} selectedUser={selectedUser} />
                }
                {selectedUser &&
                 <MessageInput user={profile} selectedUser={selectedUser} />
                }
            </div>
        </div>
    )
}

export default Users;