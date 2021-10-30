import React, {useState} from 'react';
import css from './MyPosts.module.css';
import {SharedPosts} from './MySharedPosts/SharedPosts'
import {SendNewPost} from './SendNewPost/SendNewPost';
import {ProfileProps} from "../Profile";
import {MesPropType} from "../../../redux/state";

export type MyPostsProps = {
    posts: Array<MesPropType>
    addPost: (post:string) => void
}


export const MyPosts = (props: MyPostsProps) => {

    let [newSharedPosts, setNewSharedPosts] = useState<Array<MesPropType>>(props.posts)


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


