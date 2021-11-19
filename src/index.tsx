import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {App} from "./App";
import {store} from "./redux/state";




export const renderEntireTree = () => {

    ReactDOM.render(<App
        store={store}
    />, document.getElementById('root'));

}
renderEntireTree()
store.subscribe(renderEntireTree)


serviceWorker.unregister();
