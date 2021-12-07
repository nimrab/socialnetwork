import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {ProfilePageType, ReduxStateType} from "../../../redux/store";
import {Dispatch} from "redux";

// export const MyPostsContainer = (props: AppPropsType) => {
//
//     const state = props.store.getState().profilePage
//
//     console.log(props.store)
//
//
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     const updateNewPostText = (newText: string) => {
//         props.store.dispatch(updateNewPostTextActionCreator(newText))
//     }
//
//
//     return (
//         <MyPosts
//             profilePage={state}
//             addPost={addPost}
//             updateNewPostText={updateNewPostText}
//         />
//     )
// }


export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profilePage: ProfilePageType
}

type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)