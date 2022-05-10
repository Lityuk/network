import React from "react";
import {ActionType, addPostAC, PostType, updatePostAC} from "../../../redux/state";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

// export type newPostElement = string || null

type MyPostsType = {
  posts: Array<PostType>;
  newPostText: string;
  // addPost: () => void;
  // updateNewPostText: (newText: string) => void;
  dispatch:(action:ActionType)=>void
};

export const MyPosts = (props: MyPostsType) => {
  let postsElements = props.posts.map((p) => {
    return (
      <Post
        key={p.id}
        id={p.id}
        message={p.message}
        likeCounts={p.likeCounts}
      />
    );
  });

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addNewPost = () => {
    const text = newPostElement.current?.value;
    text && props.dispatch(addPostAC());
  };

  const onPostChange = () => {
    // debugger
    const text = newPostElement.current?.value;
    text && props.dispatch(updatePostAC(text));
  };

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addNewPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
