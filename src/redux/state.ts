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
};

export type MessagesPageType = {
  dialogs: Array<DialogsDataType>;
  messages: Array<MessagesDataType>;
};

export type StateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
};

export let state: StateType = {
  profilePage: {
    posts: [
      { id: "1", message: "Hello, how r u?", likeCounts: 15 },
      { id: "2", message: "It's my first post!", likeCounts: 15 },
      { id: "3", message: "React Redux", likeCounts: 100 },
    ],
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
  },
};
