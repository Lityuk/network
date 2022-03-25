import React from "react";
import { PostType } from "../../../..";
import s from "./Post.module.css";




export const Post = (props: PostType) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62yFgkkXjo-bxJ_hsa-voLIroApzEUroKug&usqp=CAU"
        alt="ava"
      />
      {props.message}
      <div>
        <span>like </span>
        {props.likeCounts}
      </div>
    </div>
  );
};
