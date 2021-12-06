import React from "react";
import css from "./SendNewPost.module.css";
import {Button} from "./Button/Button";
import {Textarea} from "./Textarea/Textarea";


type SendNewPostPropsType = {
    newPostText: string
    addPost: () => void
    updateNewPostText: (newSymbol: string) => void

}

export const SendNewPost = (props: SendNewPostPropsType) => {


    const buttonCallbackHandler = () => {
        props.addPost()
    }

    const onPostChange = (value: string) => {
        props.updateNewPostText(value)
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