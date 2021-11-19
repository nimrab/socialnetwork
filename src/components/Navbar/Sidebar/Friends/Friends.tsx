import React from "react";
import css from './Friends.module.css'
import {FriendsType} from "../../../../redux/state";



export type FriendsProps = {
    friends: Array<FriendsType>
}

export const Friends = (props:FriendsProps) => {




    return (

        <section className={css.friends}>

            {
                props.friends.map(el => {
                    return (
                        <div className={css.friend} key={el.id}>
                            <div className={css.friend_photo}></div>
                            <div className={css.friend_name}>{el.name}</div>
                        </div>
                    )
                })
            }
        </section>
    )
}