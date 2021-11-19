import React, {ChangeEvent, TextareaHTMLAttributes, useState} from "react";
import css from "./SendNewPost.module.css";
import {Button} from "./Button";


type SendNewPostPropsType = {
    callback: (post:string) => void
    newPostText:string
    updateNewPostText: (newText:string) => void
}

export const SendNewPost = (props: SendNewPostPropsType) => {

    let [newPostText, setNewPostText] = useState<string>("")

    const onChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPostText(event.currentTarget.value)
    }

    const callbackHandler = () => {
        // props.callback(newPostText)
        // setNewPostText("")
        addPost()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }


    //doing through refs
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        if (newPostElement.current) { //свойство current получает соответствующий DOM-элемент.
            const text = newPostElement.current.value
            props.callback(text)
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
            {/*<input type="text" className={css.post_input}*/}
            {/*       placeholder="Type your message"*/}
            {/*       value={newPostText}*/}
            {/*       onChange={onChangeEventHandler}*/}
            {/*/>*/}

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