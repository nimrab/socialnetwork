import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, stateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {App} from "./App";





export const renderEntireTree = (state: stateType) => {

    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
    />, document.getElementById('root'));

}
renderEntireTree(state)
subscribe(renderEntireTree)


serviceWorker.unregister();
