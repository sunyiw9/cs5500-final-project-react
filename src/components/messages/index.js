import React from "react";
import Users from "./users";
import * as userService from "../../services/users-service"
import {useEffect, useState} from "react";
import * as securityService from "../../services/security-service";

const Messages = () => {
  // const[user, setUser] = useState('');
  const[users, setUsers] = useState([]);

  const findUsers = () => {
    return userService.findAllUsers()
        .then(users => {
          setUsers(users)
        })
  }
  const [profile, setProfile] = useState({});

  useEffect(() => {
    try {
      securityService.profile()
          .then((user) => {
            if (user) {
              setProfile(user);
            }
          });
    } catch (e) {
    }
    findUsers();
  }, []);
  return(
      <div>
      <h1>Messages Screen</h1>
          <h2 style={{paddingTop:"20px"}}>Click on the user and send a message!</h2>
      <Users users={users} refreshUsers={findUsers()}/>
      </div>


  );
};
export default Messages;