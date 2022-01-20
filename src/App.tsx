import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {WithRouterProfile} from "./components/Profile/WithRouterProfile";
import {Login} from "./components/Header/Login/Login";


export const App = () => {

    return (
        <BrowserRouter>
            <div className="main_section">
                <Header/>
                <Route path='/login' render={() => <Login/>}/>
                <Navbar/>
                <div className="content">

                    <Route path='/profile/:userId?' render={() => <WithRouterProfile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

