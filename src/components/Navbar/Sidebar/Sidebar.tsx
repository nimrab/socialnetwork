import React from "react";
import css from './Sidebar.module.css'
import {Friends} from "./Friends/Friends";
import {FriendsType} from "../../../redux/store";


export type SidebarProps = {
    friends: Array<FriendsType>
}

export const Sidebar = (props: SidebarProps) => {

    return (

        <div className={css.sidebar}>
            <Friends friends={props.friends}/>
        </div>
    )

}