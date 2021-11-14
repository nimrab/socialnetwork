import React, {useState} from 'react';
import {SharedPosts} from './MySharedPosts/SharedPosts'
import {SendNewPost} from './SendNewPost/SendNewPost';
import {MesPropType, profilePageType} from "../../../redux/state";

export type MyPostsProps = {
    stateProfilePage: profilePageType
    addPost: (post: string) => void
    updateNewPostText: (newText:string) => void
}


export const MyPosts = (props: MyPostsProps) => {

    let [newSharedPosts, setNewSharedPosts] = useState<Array<MesPropType>>(props.stateProfilePage.posts)


    const callbackHandler = (post: string) => {
        //const newPost: MesPropType = {mes: post, likes: 0}
        //const newPostArr = [newPost, ...newSharedPosts]
        //setNewSharedPosts(newPostArr)
        props.addPost(post)
    }


    return (
        <section>
            <SendNewPost
                callback={callbackHandler}
                newPostText={props.stateProfilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            <SharedPosts
                mesData={newSharedPosts}
            />
        </section>
    )

}


