import React, {useState} from 'react';
import css from './MyPosts.module.css';
import {SharedPosts} from './MySharedPosts/SharedPosts'
import {SendNewPost} from './SendNewPost/SendNewPost';
import {ProfileProps} from "../Profile";
import {MesPropType} from "../../../index";


export const MyPosts = (props: ProfileProps) => {

    let [newSharedPosts, setNewSharedPosts] = useState<Array<MesPropType>>(props.mesData)


    const callbackHandler = (post: string) => {
        const newPost: MesPropType = {mes: post, likes: 0}
        const newPostArr = [newPost, ...newSharedPosts]
        props.addPost(post)
        setNewSharedPosts(newPostArr)
    }


    return (
        <section>
            <SendNewPost callback={callbackHandler}/>
            <SharedPosts mesData={newSharedPosts}/>
        </section>
    )

}


