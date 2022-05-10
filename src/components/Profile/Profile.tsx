import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";


export type ProfilePropsType = {
    profilePage:ProfilePageType
    // addPost: () => void;
    // updateNewPostText:(newText:string) => void
    dispatch:(action:ActionType)=>void
}

export const Profile = (props:ProfilePropsType) => {


  return (
    <div>
      <ProfileInfo />
      <MyPosts
          posts={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
          // addPost = {props.addPost}
          // updateNewPostText = {props.updateNewPostText}
          dispatch={props.dispatch}
      />
    </div>
  );
};
