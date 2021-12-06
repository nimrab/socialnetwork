import React from 'react';
import {SharedPosts} from './MySharedPosts/SharedPosts'
import {SendNewPost} from './SendNewPost/SendNewPost';
import {MyPostsPropsType} from "./MyPostsContainer";


// export type MyPostsProps = {
//     profilePage: ProfilePageType
//     addPost: () => void
//     updateNewPostText: (newSymbol: string) => void
// }


export const MyPosts = (props: MyPostsPropsType) => {


    return (
        <section>
            <SendNewPost
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
            <SharedPosts
                mesData={props.profilePage.posts}
            />
        </section>
    )

}


