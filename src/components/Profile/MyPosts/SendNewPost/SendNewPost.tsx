import React from "react";
import css from "./SendNewPost.module.css";
import {Button} from "./Button/Button";
import {Textarea} from "./Textarea/Textarea";


type SendNewPostPropsType = {
    addPostCallback: (post: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const SendNewPost = (props: SendNewPostPropsType) => {


    const buttonCallbackHandler = () => {
        addPost()
    }

    const onPostChange = (value: string) => {
        props.updateNewPostText(value)
    }


    const addPost = () => {
        props.addPostCallback(props.newPostText)
    }


    return (
        <section className={css.post_section}>

            <div>Send your post:</div>


            <Textarea
                value={props.newPostText}
                onChange={onPostChange}
                placeholder='Input your post'
            />

            <div>
                <Button name="Send post" callback={buttonCallbackHandler}/>
            </div>
        </section>
    )


}