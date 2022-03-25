import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Messages } from "./components/Messages/Messages";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { DialogsDataType, MessagesDataType, PostType } from "./index";

type AppPropsType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
  post: Array<PostType>;
};

const App = (props: AppPropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Profile post={props.post}/>} />
          <Route path="/profile" element={<Profile post={props.post}/>} />
          <Route
            path="/messages/*"
            element={
              <Messages
                dialogsData={props.dialogsData}
                messagesData={props.messagesData}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
