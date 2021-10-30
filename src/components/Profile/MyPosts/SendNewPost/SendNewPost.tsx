import React, {ChangeEvent, useState} from "react";
import css from "./SendNewPost.module.css";
import {Button} from "./Button";





export const SendNewPost = (props: {callback: (post:string) => void}) => {

    let [newPostText, setNewPostText] = useState<string>("")

    const onChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPostText(event.currentTarget.value)
    }

    const callbackHandler = () => {
        props.callback(newPostText)
        setNewPostText("")
    }

    return (
        <section className={css.post_section}>

            <div>Send your post:</div>
            <input type="text" className={css.post_input}
                   placeholder="Type your message"
                   value={newPostText}
                   onChange={onChangeEventHandler}
            />
            <div>
                <Button name="Send post" callback={callbackHandler}/>
            </div>
        </section>
    )


}