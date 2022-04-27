/**
 * @file Implements Bookmark screen
 */

import React from "react";
import MyBookmarkedMessages from "./my-bookmarked-message-screen";
import * as service from "../../services/bookmarks-service"
import * as securityService from "../../services/security-service";

import {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
function Bookmarks () {


    const navigate = useNavigate();

    const [profile, setProfile] = useState({});

    // If user is not logged in, the user will be redirected to login page
    useEffect(async () => {
        try {
            const user = await securityService.profile();
            setProfile(user);
        } catch (e) {
            navigate('/login');
        }
    }, []);


  return(
    <div>
        <h1>Bookmarks Screen</h1>
        <span className = "ttr-bookmarks-type">
        <Link to="/bookmarks/tuits"
              className="nav-link">
            Tuits</Link>
        <Link to="/bookmarks/messages"
                className="nav-link">
              Messages</Link>
        {/*<Link to="/bookmarks/news"*/}
        {/*      className="nav-link">*/}
        {/*    News</Link>*/}
            </span>

      <Routes>
          <Route path="/messages" element ={<MyBookmarkedMessages/>}/>
          </Routes>
    </div>
  );
}
export default Bookmarks;