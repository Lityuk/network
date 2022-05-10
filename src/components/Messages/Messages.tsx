import React, { useRef } from "react";
import s from "./Messages.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import {ActionType, addMessageAC, MessagesPageType, updateMessageAC} from "../../redux/state";

type MessagesPropsType = {
  state: MessagesPageType;
  // updateNewMessageText: (text: string) => void;
  // addMessage: () => void;
  dispatch:(action:ActionType)=>void
};

export const Messages = (props: MessagesPropsType) => {
  const dialogsElements = props.state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  const messagesElements = props.state.messages.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });



  const newMessageElement = useRef<HTMLTextAreaElement>(null)

  const addNewMessage = () => {
    // debugger
    const text = newMessageElement.current?.value;
    text && props.dispatch(addMessageAC())
  };

  const  onMessageChange= () => {
    const text = newMessageElement.current?.value;
    text && props.dispatch(updateMessageAC(text))

  }


  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.dialogs}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <textarea onChange={onMessageChange} ref={newMessageElement} value= {props.state.newTextMessage}/>
        <button onClick={addNewMessage}>Add Message</button>
      </div>
    </div>
  );
};
