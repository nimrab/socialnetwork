import React from 'react';
import css from './MyPosts.module.css';
import {MyPost} from './MyPost/MyPost'

export type MesPropType = {
    mes: string
}


export const MyPosts = () => {

    return (
        <section>

            <section className={css.post_section}>

                <div>Send your post:</div>
                <input type="text" className={css.post_input}/>
                <div><input type="submit" value="SEND POST"/></div>
            </section>

            <section className={css.post_shared}>

                <MyPost mes={"hello bro"} likes = {600}/>
                <MyPost mes={"how are you?"} likes = {700}/>
                <MyPost mes={"I am here"} likes = {800}/>

            </section>

        </section>

    )

}
