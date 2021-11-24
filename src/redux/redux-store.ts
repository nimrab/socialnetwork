import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const reducers = combineReducers({

    profilePage:profileReducer,
    dialogsPage: dialogReducer,
    sidebar:sidebarReducer

})

export const store = createStore(reducers)

