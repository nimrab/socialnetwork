import React, {ChangeEvent, TextareaHTMLAttributes, useState} from "react";
import css from "./SendNewPost.module.css";
import {Button} from "./Button/Button";
import {Textarea} from "./Textarea/Textarea";


type SendNewPostPropsType = {
    addPostCallback: (post:string) => void
    newPostText:string
    updateNewPostText: (newText:string) => void
}

export const SendNewPost = (props: SendNewPostPropsType) => {


    const buttonCallbackHandler = () => {
            addPost()
    }

    const onPostChange = (value: string) => {
        props.updateNewPostText(value)
    }


    //doing through refs
    const ref = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        if (ref.current) { //свойство current получает соответствующий DOM-элемент.
            props.addPostCallback(props.newPostText)
        }
    }

    const zeroText = () => {
        props.updateNewPostText('')
    }
    const defaultText = () => {
        setTimeout(() => props.updateNewPostText('Input your message'),100)
    }

    //doing through refs

    return (
        <section className={css.post_section}>

            <div>Send your post:</div>


            <Textarea
                ref={ref}
                value={props.newPostText}
                onChange={onPostChange}
                onClick={zeroText}
                onBlur={defaultText}
            />

            <div>
                <Button name="Send post" callback={buttonCallbackHandler}/>
            </div>
        </section>
    )


}