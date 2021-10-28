import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {dialogDataType, dialogMessageDataType, MesPropType} from "./index";


type AppProps = {
    mesData: Array<MesPropType>,
    dialogData: Array<dialogDataType>,
    dialogMessageData: Array<dialogMessageDataType>
}


const App = (props: AppProps) => {


    return (
        <BrowserRouter>
            <div className="main_section">
                <Header/>
                <Navbar/>
                <div className="content">

                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/dialogs' component={Profile}/>*/}
                    <Route path='/profile' component={() => <Profile mesData={props.mesData}/>}/>
                    <Route path='/dialogs' component={() => <Dialogs dialogData={props.dialogData} dialogMessageData={props.dialogMessageData}/>}/>

                    {/*<Dialogs></Dialogs>*/}
                    {/*<Profile/>*/}

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
