import React from "react";
import css from "./SendNewPost.module.css";


type SendNewPostProps = {

}


export const SendNewPost:React.FC<SendNewPostProps> = (props) => {

    return (
        <section className={css.post_section}>

            <div>Send your post:</div>
            <input type="text" className={css.post_input} placeholder="сделать добавление поста по кнопке..!!самому!!"/>
            <div><input type="submit" value="SEND POST"/></div>
        </section>
    )


}