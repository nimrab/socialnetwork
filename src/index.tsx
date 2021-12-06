import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {App} from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


export const renderEntireTree = () => {

    ReactDOM.render(
        <Provider store={store}>
            <App  />
        </Provider>
        , document.getElementById('root'));

}
renderEntireTree()
store.subscribe(renderEntireTree)


serviceWorker.unregister();
