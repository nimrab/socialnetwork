import React from "react";
import css from "./Post.module.css";
import {MesPropType} from "../../../../redux/state";






export const Post = (props:MesPropType) => {



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