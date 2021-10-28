import React from 'react';
import css from './SharedPosts.module.css';
import {Post} from "./Post";
import {MesPropType} from "../../../../index";


export const SharedPosts = (props:{mesData:Array<MesPropType>}) => {


    const allPosts = props.mesData.map(el => {
        return <Post mes={el.mes} likes={el.likes}/>
    })

    return (

        <section className={css.post_shared}>

            {allPosts}

        </section>

    )

}
