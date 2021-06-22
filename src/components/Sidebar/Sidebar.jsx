import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
   return (
      <aside className="sidebar" >
         <ul>
            <li><a href="">Profile</a></li>
            <li><a href="">Messages</a></li>
            <li><a href="">Feed</a></li>
            <li><a href="">Music</a></li>
         </ul>
      </aside>
   )
}


export default Sidebar;