import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {storeType} from "./redux/state";

type AppPropsType = {
    store: storeType
}


export const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="main_section">
                <Header/>
                <Navbar state={props.store.getState().sidebar}/>
                <div className="content">

                    <Route path='/profile'
                           render={
                               () => <Profile
                                   stateProfilePage={props.store.getState().profilePage}
                                   addPost={props.store.addPost.bind(props.store)}
                                   updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                               />
                           }
                    />

                    <Route path='/dialogs'
                           render={
                               () => <Dialogs
                               state={props.store.getState().dialogsPage}
                               />
                           }
                    />

                </div>
            </div>
        </BrowserRouter>
    )
}

