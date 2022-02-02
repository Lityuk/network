import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./Profile/MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
                        alt="main_img"
                    />
                </div>
                <div>ava + description</div>
            </div>
            <MyPosts/>
        </div>

    )

};

export default Profile;
