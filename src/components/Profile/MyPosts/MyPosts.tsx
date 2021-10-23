import React from 'react';
import css from './MyPosts.module.css';
import {SharedPosts} from './MySharedPosts/SharedPosts'
import {SendNewPost} from './SendNewPost/SendNewPost';

export type MesPropType = {
    mes: string
}


export const MyPosts = () => {

    return (
        <section>
            <SendNewPost/>
            <SharedPosts/>
        </section>

    )

}


