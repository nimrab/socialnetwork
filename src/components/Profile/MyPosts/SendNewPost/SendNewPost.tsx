import React, {ChangeEvent, useState} from "react";
import css from "./SendNewPost.module.css";
import {Button} from "./Button";


type SendNewPostPropsType = {
    callback: (post:string) => void
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


    //doing through refs
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.callback(text)

            newPostElement.current.value = ''
        }
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
                className={css.post_input}
            >
            </textarea>

            <div>
                <Button name="Send post" callback={callbackHandler}/>
            </div>
        </section>
    )


}