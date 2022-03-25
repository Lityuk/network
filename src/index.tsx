import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';


export type DialogsDataType = {
    id:string
    name:string
}

export type MessagesDataType = {
    id:string
    message:string
}


export let dialogsData:Array<DialogsDataType> = [
    { id: "1", name: "Vova" },
    { id: "2", name: "Lena" },
    { id: "3", name: "Nadia" },
    { id: "4", name: "Murzik" },
    { id: "5", name: "Mama" },
];

export let messagesData:Array<MessagesDataType> = [
    { id: "1", message: "Hello" },
    { id: "2", message: "Yaba da bi do" },
    { id: "3", message: "Ho-ho-ho" },
    { id: "4", message: "True story" },
    { id: "5", message: "bla bla bla" },
];


//Posts

export type PostType = {
    id:string
    message:string
    likeCounts:number
}

export let post:Array<PostType> = [
    { id: "1", message: "Hello, how r u?", likeCounts: 15 },
    { id: "2", message: "It's my first post!", likeCounts: 15 },
    { id: "3", message: "React Redux", likeCounts: 100 },
];



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                dialogsData = {dialogsData}
                messagesData = {messagesData}
                post = {post}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
