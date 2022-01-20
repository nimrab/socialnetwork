import React from "react";
import css from "../ProfileInfo/ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {UserProfileType} from "../../../redux/store";
import userDefaultPhoto from "../../../assets/images/userDefault.png";


type ProfileInfoPropsType = {
    profile: UserProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (props.profile.userId === null) {

        return <Preloader/>
    } else {

        return (
            <section className={css.photo_section}>
                  <img src={props.profile.photos.large !== null ? props.profile.photos.large : userDefaultPhoto}
                          alt={'user photo'}
                          className={css.img}/>
                     <div className={css.photo_desc}>
                         <h5 className={css.photo_name}>{props.profile.fullName}</h5>
                         <h4>User ID: {props.profile.userId}</h4>
                         <h4>About Me: {props.profile.aboutMe}</h4>
                     </div>

            </section>
        )
    }

}