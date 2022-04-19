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
import {StateType} from "./redux/state";

type AppPropsType = {
  state: StateType
};

const App = (props: AppPropsType) => {


  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="/profile"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="/messages/*"
            element={<Messages state={props.state.messagesPage} />}
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
