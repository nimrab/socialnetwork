import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


export type MesPropType = {
    mes: string
    likes: number
}

const mesData: Array<MesPropType> = [
    {mes: "hello bro", likes: 300},
    {mes: "hello bro1", likes: 330},
    {mes: "hello bro2", likes: 110},
]


export type dialogDataType = {
    id: number
    name: string
}

const dialogData: Array<dialogDataType> = [
    {id: 1, name: "MyFriend1"},
    {id: 2, name: "MyFriend2"},
    {id: 3, name: "MyFriend3"},
    {id: 4, name: "MyFriend4"},
    {id: 5, name: "MyFriend5"},
    {id: 6, name: "MyFriend6"},
    {id: 6, name: "MyFriend6"},
]

export type dialogMessageDataType = {
    id: number
    text: string
}

const dialogMessageData: Array<dialogMessageDataType> = [
    {id: 1, text: "hello"},
    {id: 2, text: "wowow"},
    {id: 3, text: "fufufu"},
]


const addPost = (post: string) => {

    mesData.push({
        mes: post,
        likes: 0
    })

}


ReactDOM.render(<App
    mesData={mesData}
    dialogData={dialogData}
    dialogMessageData={dialogMessageData}
    addPost={addPost}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
