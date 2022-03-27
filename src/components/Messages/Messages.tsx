import React from "react";
import s from "./Messages.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesPageType} from "../../redux/state";


// type DialogsDataType = {
//   id:string
//   name:string
// }
//
// type MessagesDataType = {
//   id:string
//   message:string
// }
//
//
// let dialogsData:Array<DialogsDataType> = [
//   { id: "1", name: "Vova" },
//   { id: "2", name: "Lena" },
//   { id: "3", name: "Nadia" },
//   { id: "4", name: "Murzik" },
//   { id: "5", name: "Mama" },
// ];
//
// let messagesData:Array<MessagesDataType> = [
//   { id: "1", message: "Hello" },
//   { id: "2", message: "Yaba da bi do" },
//   { id: "3", message: "Ho-ho-ho" },
//   { id: "4", message: "True story" },
//   { id: "5", message: "bla bla bla" },
// ];


type MessagesPropsType = {
    state:MessagesPageType
};


export const Messages = (props:MessagesPropsType) => {


    let dialogsElements = props.state.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} />;
    });


    let messagesElements = props.state.messages.map((m) => {
        return <Message message={m.message} id={m.id} />;
    });

  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.dialogs}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
