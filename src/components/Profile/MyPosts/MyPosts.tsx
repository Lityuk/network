import React from "react";
import {PostType, ProfilePageType} from "../../../redux/state";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

// export type newPostElement = string || null

type MyPostsType = {
    posts: Array<PostType>
    addPost: (postMessage:string) => void
}

export const MyPosts = (props: MyPostsType, ) => {



  let postsElements = props.posts.map((p) => {
    return <Post id={p.id} message={p.message} likeCounts={p.likeCounts} />;
  });

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addNewPost = () => {

      let text = newPostElement.current?.value;
      text && props.addPost(text);

      if(newPostElement.current) {
          newPostElement.current.value = "";
      }

  }

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <button  onClick={addNewPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
