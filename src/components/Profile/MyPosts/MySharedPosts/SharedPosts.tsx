import React, {useState} from 'react';
import css from './SharedPosts.module.css';
import {Post} from "./Post";
import {v1} from 'uuid'
import {MesPropType} from "../../../../redux/store";


type SharedPostsProps = {
    mesData: Array<MesPropType>
}

export const SharedPosts = (props:SharedPostsProps) => {




    const allPosts = props.mesData.map(el => {
        return <Post key = {v1()} mes={el.mes} likes={el.likes}/>
    })

    return (

        <section className={css.post_shared}>

            {allPosts}

        </section>

    )

}
