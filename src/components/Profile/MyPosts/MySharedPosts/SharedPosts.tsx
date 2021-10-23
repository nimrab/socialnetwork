import React from 'react';
import css from './SharedPosts.module.css';
import {Post} from "./Post";



export const SharedPosts = (props:any) => {

    return (

        <section className={css.post_shared}>

            <Post mes={"hello bro"} likes = {600}/>
            <Post mes={"how are you?"} likes = {700}/>
            <Post mes={"I am here"} likes = {800}/>

        </section>

    )

}
