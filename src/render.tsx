import ReactDOM from "react-dom";
import {App} from "./App";
import {addPost, stateType} from "./redux/state";
import React from "react";


export const renderEntireTree = (props:stateType) => {

    ReactDOM.render(<App
        state={props}
        addPost={addPost}
    />, document.getElementById('root'));

}