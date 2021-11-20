import React, {ChangeEvent, TextareaHTMLAttributes, useState} from "react";
import css from "./SendNewPost.module.css";
import {Button} from "./Button";


type SendNewPostPropsType = {
    addPostCallback: (post:string) => void
    newPostText:string
    updateNewPostText: (newText:string) => void
}

export const SendNewPost = (props: SendNewPostPropsType) => {


    const callbackHandler = () => {
        addPost()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }


    //doing through refs
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        if (newPostElement.current) { //свойство current получает соответствующий DOM-элемент.
            //const text = newPostElement.current.value
            props.addPostCallback(props.newPostText)
        }
    }

    const zeroText = () => {
        props.updateNewPostText('')
    }
    const defaultText = (text:string) => {
        setTimeout(() => props.updateNewPostText(text),300)
    }

    //doing through refs

    return (
        <section className={css.post_section}>

            <div>Send your post:</div>

            <textarea
                ref={newPostElement}
                value={props.newPostText}
                className={css.post_input}
                onChange={onPostChange}
                onClick={zeroText}
                onBlur={() => defaultText('Input your message')}
            />

            <div>
                <Button name="Send post" callback={callbackHandler}/>
            </div>
        </section>
    )


}