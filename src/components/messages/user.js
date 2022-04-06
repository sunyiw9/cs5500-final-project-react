import React from "react";
// import{Link} from "react-router-dom";
const User = ({user, deleteUser}) =>{
return(
    <li className="ttr-messages list-group-item d-flex rounded-10" style={{width:"25%", height:"75px"}}>
        <div>
            {
                user.username &&
                <img src={`../images/${user.username}.jpg`} alt = "abc"
                     className="ttr-width-50px rounded-circle"/>
            }
        </div>
        <div className = "ttr-messages" style={{paddingLeft:"10px", paddingTop:"10px"}}>
            {user.username}
        </div>

        {/*// needs to be update after create message-list service*/}
        {/*<div>*/}
        {/*    <i onClick={()=> deleteUser(user._id)} className="fas fa-remove fa-2x fa-pull-right"/>*/}
        {/*</div>*/}
    </li>
);
}
export default User;