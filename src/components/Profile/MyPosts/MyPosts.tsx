import React from 'react';
import css from './MyPosts.module.css';
import {SharedPosts} from './MySharedPosts/SharedPosts'
import {SendNewPost} from './SendNewPost/SendNewPost';
import {MesPropType} from "../../../index";




export const MyPosts = (props: {mesData: Array<MesPropType>}) => {


    return (
        <section>
            <SendNewPost/>
            <SharedPosts mesData={props.mesData}/>
        </section>
    )

}


