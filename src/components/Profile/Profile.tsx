import React from 'react';
import css from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {

    return (
        <div className={css.profile}>
            <section className={css.photo_section}>
                <img src="https://www.bigstockphoto.com/images/homepage/collections2020/module-4.jpg"
                     className={css.img}/>
                <div className={css.photo_desc}>
                    <h5 className={css.photo_name}>Mister bearded man</h5>

                    Hello buddy!
                </div>

            </section>

            <MyPosts/>

        </div>
    )

}
