import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type AppPropsType = any


export const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className="main_section">
                <Header/>
                <Navbar/>
                <div className="content">

                    <Route path='/profile' render={() => <Profile/>}/>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

