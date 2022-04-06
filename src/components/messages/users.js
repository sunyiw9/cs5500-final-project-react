import React from "react";
import User from "./user";
import * as userService from "../../services/users-service";

const Users = ({users = [], refreshUsers}) => {
    const deleteUser =(uid) =>
        userService.deleteUser(uid)
            .then(refreshUsers);
    return(
        <div>
            <ul className="ttr-messages list-group align-items-start" style={{paddingTop:'10px', borderRadius:'0px'}}>
                {
                    users.map && users.map(user =>
                        <User key={user._id}
                        deleteUser={deleteUser}
                        user={user}/>)
                }
            </ul>
        </div>
    )
}

export default Users;