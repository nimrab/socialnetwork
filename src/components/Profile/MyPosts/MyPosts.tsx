import React from 'react';
import {SharedPosts} from './MySharedPosts/SharedPosts'
import {SendNewPost} from './SendNewPost/SendNewPost';
import {ActionTypes,ProfilePageType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


export type MyPostsProps = {
    stateProfilePage: ProfilePageType
    dispatch:(action:ActionTypes) => void
}


export const MyPosts = (props: MyPostsProps) => {


    const addPostCallback = (post: string) => {
        props.dispatch(addPostActionCreator(post))
    }

    const updateNewPostText = (newText:string) => {
        props.dispatch(updateNewPostTextActionCreator(newText) )
    }

    return (
        <section>
            <SendNewPost
                addPostCallback={addPostCallback}
                newPostText={props.stateProfilePage.newPostText}
                updateNewPostText={updateNewPostText}
            />
            <SharedPosts
                mesData={props.stateProfilePage.posts}
            />
        </section>
    )

}


