// type ObserverType = () => void;

export type PostType = {
  id: string;
  message: string;
  likeCounts: number;
};

export type DialogsDataType = {
  id: string;
  name: string;
};

export type MessagesDataType = {
  id: string;
  message: string;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type MessagesPageType = {
  dialogs: Array<DialogsDataType>;
  messages: Array<MessagesDataType>;
  newTextMessage: string;
};

export type StateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
};

export type StoreType = {
  _state: StateType;
  getState: () => StateType;
  addPost: () => void;
  _callSubscriber: (state: StateType) => void;
  updateNewPostText: (newText: string) => void;
  addMessage: () => void;
  updateNewMessageText: (newTextMessage: string) => void;
  subscribe: (observer: (state: StateType) => void) => void;
};

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hello, how r u?", likeCounts: 15 },
        { id: "2", message: "It's my first post!", likeCounts: 15 },
        { id: "3", message: "React Redux", likeCounts: 100 },
      ],
      newPostText: "",
    },

    messagesPage: {
      dialogs: [
        { id: "1", name: "Vova" },
        { id: "2", name: "Lena" },
        { id: "3", name: "Nadia" },
        { id: "4", name: "Murzik" },
        { id: "5", name: "Mama" },
      ],
      messages: [
        { id: "1", message: "Hello" },
        { id: "2", message: "Yaba da bi do" },
        { id: "3", message: "Ho-ho-ho" },
        { id: "4", message: "True story" },
        { id: "5", message: "bla bla bla" },
      ],
      newTextMessage: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    const newPost: PostType = {
      id: "5",
      message: this._state.profilePage.newPostText,
      likeCounts: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText=newText
    this._callSubscriber(this._state);
  },

  addMessage() {
    const newMessage: MessagesDataType = {
      id: "6",
      message: this._state.messagesPage.newTextMessage,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newTextMessage = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newTextMessage) {
    this._state.messagesPage.newTextMessage = newTextMessage;
    this._callSubscriber(this._state);
  },

};


