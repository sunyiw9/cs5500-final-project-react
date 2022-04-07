import React from "react"
import {Routes,Route} from "react-router-dom";
import {Link} from "react-router-dom";
import MessageWindow from "./message-window";
const User = ({user, deleteUser}) =>{
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
        <Link to='/message/window'><button>chat</button>
        </Link>

        {/*// needs to be update after create message-user service*/}
        {/*<div>*/}
        {/*    <i onClick={()=> deleteUser(user._id)} className="fas fa-remove fa-2x fa-pull-right"/>*/}
        {/*</div>*/}
    </li>
    <Routes>
        <Route path="/window" element={<MessageWindow/>}/>
    </Routes>
    </div>

);
}
export default User;