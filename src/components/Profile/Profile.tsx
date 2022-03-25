import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

export type ProfilePropsType = {
    post: Array<PostType>;
}

export const Profile = (props:ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.post}/>
    </div>
  );
};
