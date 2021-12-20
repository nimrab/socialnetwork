import React from "react";
import css from "../ProfileInfo/ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";



export const ProfileInfo = (props: any) => {
    console.log('profileInfo' + props.profile)

        return (
            <Preloader/>
        )
        /* } else {

             return (
                 <section className={css.photo_section}>

                   {/!*  <img src={props.profile?.photos.large}
                          alt={'user photo'}
                          className={css.img}/>
                     <div className={css.photo_desc}>
                         <h5 className={css.photo_name}>{props.profile?.fullName}</h5>
                         <span>{props.profile?.aboutMe}</span>
                     </div>*!/}

                 </section>
             )
         }*/

}