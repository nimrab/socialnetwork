import {SidebarType} from "./store";
import {v1} from "uuid";



const initialState = {
    friends: [
        {id: v1(), name: "Fedor"},
        {id: v1(), name: "Sergey"},
        {id: v1(), name: "Vasiliy"},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: any): SidebarType => {

    switch (action.type) {

        default:
            return state
    }
}