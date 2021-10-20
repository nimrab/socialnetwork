import React from 'react';
import css from './MyPost.module.css';


type MesPropType = {
    mes: string,
    likes: number
}

export const MyPost:React.FC<MesPropType> = (props) => {

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
