import React from 'react';
import {SharedPosts} from './MySharedPosts/SharedPosts'
import {SendNewPost} from './SendNewPost/SendNewPost';
import {addPostActionType, ProfilePageType, updateNewPostTextActionType} from "../../../redux/state";

export type MyPostsProps = {
    stateProfilePage: ProfilePageType
    dispatch:(action: addPostActionType | updateNewPostTextActionType) => void
    //addPost: (post: string) => void
    //updateNewPostText: (newText:string) => void
}


export const MyPosts = (props: MyPostsProps) => {


    const addPostCallback = (post: string) => {
        props.dispatch({type: 'ADD-POST', post:post})
    }

    const updateNewPostText = (newText:string) => {
        props.dispatch({type: 'UPDATE-POST-TEXT', newText: newText} )
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


