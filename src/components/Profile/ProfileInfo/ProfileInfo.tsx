import React from "react";
import css from "../ProfileInfo/ProfileInfo.module.css";


export const ProfileInfo = (props:any) => {

    return (
        <section className={css.photo_section}>
            <img src="https://www.bigstockphoto.com/images/homepage/collections2020/module-4.jpg"
                 className={css.img}/>
            <div className={css.photo_desc}>
                <h5 className={css.photo_name}>Mister bearded man</h5>
                Hello buddy!
            </div>

        </section>
    )

}