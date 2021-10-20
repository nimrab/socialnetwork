import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"


const App = () => {

    return (
        <div className="main_section">
            <Header/>
            <Navbar/>
            <div className="content">

                <Route component={Profile}/>
                <Route component={Dialogs}/>

                {/*<Dialogs></Dialogs>*/}
                {/*<Profile/>*/}

            </div>
        </div>

    )
}

export default App;
