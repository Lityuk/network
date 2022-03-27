import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export type ProfilePropsType = {
    state:ProfilePageType
}

export const Profile = (props:ProfilePropsType) => {
    {console.log(props.state.posts)}
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </div>
  );
};
