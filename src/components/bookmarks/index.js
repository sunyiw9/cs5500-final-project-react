import React from "react";
import MyBookmarkedMessages from "./my-bookmarked-message-screen";
import * as service from "../../services/bookmarks-service"
import {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
function Bookmarks () {
  return(
    <div>
        <h1>Bookmarks Screen</h1>
        <Link to="/bookmarks/tuits"
              className="nav-link">
            Tuits</Link>
        <Link to="/bookmarks/messages"
                className="nav-link">
              Messages</Link>
        <Link to="/bookmarks/news"
              className="nav-link">
            News</Link>


      <Routes>
          <Route path="/messages" element ={<MyBookmarkedMessages/>}/>
          </Routes>
    </div>
  );
}
export default Bookmarks;