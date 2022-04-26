/**
 * @file Component renders message window and users list
 */
import React from "react";
import Users from "./users";
import * as userService from "../../services/users-service"
import {useEffect, useState} from "react";
import * as securityService from "../../services/security-service";
import * as service from "../../services/security-service";
// used for redirecting to login page
import{useNavigate} from "react-router-dom";

const Messages = () => {
    // const[user, setUser] = useState('');
    const[users, setUsers] = useState([]);
    const navigate = useNavigate();

    const findUsers = () => {
        return userService.findAllUsers()
            .then(users => {
                setUsers(users)
            })
    }
    const [profile, setProfile] = useState({});

    // If user is not logged in, the user will be redirected to login page
    useEffect(async () => {
        try {
            const user = await service.profile();
            setProfile(user);
        } catch (e) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        try {
            securityService.profile()
                .then((user) => {

                    //console.log(user)
                    if (user) {
                        setProfile(user);
                    }
                });
        } catch (e) {
        }
        findUsers();
    }, []);

    // () => findUsers() it need to be an function
    return(
        <div>
            <h1>Messages Screen</h1>
            <h2 style={{paddingTop:"20px"}}>Click on the user and send a message!</h2>
            <Users profile={profile} users={users} refreshUsers={() => findUsers()}/>
        </div>


    );
};
export default Messages;