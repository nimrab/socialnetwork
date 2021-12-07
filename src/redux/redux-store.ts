import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./user-reducer";

export const rootReducer = combineReducers({

    profilePage:profileReducer,
    dialogsPage: dialogReducer,
    sidebar:sidebarReducer,
    usersPage: userReducer

})



export const store = createStore(rootReducer)

