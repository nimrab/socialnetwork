import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {stateType, updateNewPostText} from "./redux/state";

type AppProps = {
    state: stateType
    addPost: (post: string) => void
    updateNewPostText: (newText:string) => void
}


export const App = (props: AppProps) => {


    return (
        <BrowserRouter>
            <div className="main_section">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="content">

                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/dialogs' component={Profile}/>*/}
                    <Route path='/profile'
                           render={
                               () => <Profile
                                   stateProfilePage={props.state.profilePage}
                                   addPost={props.addPost}
                                   updateNewPostText={props.updateNewPostText}
                               />
                           }
                    />

                    <Route path='/dialogs'
                           render={
                               () => <Dialogs
                               state={props.state.dialogsPage}
                               />
                           }
                    />


                    {/*<Dialogs></Dialogs>*/}
                    {/*<Profile/>*/}

                </div>
            </div>
        </BrowserRouter>
    )
}

