import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/store";

type AppPropsType = {
    // store: StoreType
    store:any
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
                                   dispatch={props.store.dispatch.bind(props.store)}
                               />
                           }
                    />

                    <Route path='/dialogs'
                           render={
                               () => <Dialogs
                               state={props.store.getState().dialogsPage}
                               dispatch={props.store.dispatch.bind(props.store)}
                               />
                           }
                    />

                </div>
            </div>
        </BrowserRouter>
    )
}

