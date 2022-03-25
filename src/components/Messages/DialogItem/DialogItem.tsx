import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import {DialogsDataType} from "../../../index";


export const DialogItem = (props: DialogsDataType) => {
  return (
    <div className={s.dialog}>
      <NavLink
        className={({ isActive }) => (isActive ? `${s.active}` : "")}
        to={"/messages/" + props.id}
      >
        {props.name}
      </NavLink>
    </div>
  );
};
