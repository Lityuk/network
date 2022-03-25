import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {ProfilePropsType} from "../Profile";


// export type PostType = {
//     id:string
//     message:string
//     likeCounts:number
// }

export const MyPosts = (props:ProfilePropsType) => {
  // let post:Array<PostType> = [
  //   { id: "1", message: "Hello, how r u?", likeCounts: 15 },
  //   { id: "2", message: "It's my first post!", likeCounts: 15 },
  //   { id: "3", message: "React Redux", likeCounts: 100 },
  // ];


  let postsElements =  props.post.map((p) => {
    return <Post id={p.id} message={p.message} likeCounts={p.likeCounts} />;
  });

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
