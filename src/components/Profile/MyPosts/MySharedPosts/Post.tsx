import React from "react";
import css from "./Post.module.css";



type PostProps = {
    mes: string
    likes: number
}

export const Post:React.FC<PostProps> = (props) => {

    return (
        <div className={css.post_box} >
            <div className={css.box_text}>
                {props.mes}
            </div>
            <span className={css.thumbs}>
                {props.likes}&nbsp;
                <i className="far fa-thumbs-up"></i>

            </span>
        </div>
    )

}