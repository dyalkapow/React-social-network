import React from "react";
import "./Profile.css"

const Profile = () => {
   return (
      <div className="profile">
         <div className="banner">
            <img src="https://i.picsum.photos/id/902/1500/200.jpg?hmac=4yXLgCMh6L36OJ9wM-WojserSNX44_2ZeaBTthoorgk" alt="banner" />
         </div>

         <div className="user">
            <div className="user-avatar">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLbpdOLXgmPMgdB8xoqel9uthM3901eJXeA&usqp=CAU" alt="avatar" />
            </div>
            <div className="user-description">
               <div className="user-name">
                  <h2>Davut Y.</h2>
               </div>
               <div className="user-info">
                  <div>Date birth</div>
                  <div>City</div>
                  <div>Education</div>
                  <div>Website</div>
               </div>
            </div>
         </div>

         <div className="create-post">
            <h2>My posts</h2>
            <div className="new-post">
               new post
            </div>
         </div>

         <div className="posts">
            <div className="post1">
               post1
            </div>
            <div className="post2">
               post2
            </div>
         </div>

      </div>
   )
}

export default Profile;