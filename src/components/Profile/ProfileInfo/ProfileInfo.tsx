import React from "react";
import css from "../ProfileInfo/ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {UserProfileType} from "../../../redux/store";
import userDefaultPhoto from "../../../assets/images/userDefault.png";


type ProfileInfoPropsType = {
    profile:UserProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (props.profile === null) {

        return <Preloader/>
    } else {

        return (
            <section className={css.photo_section}>
                  <img src={props.profile.photos.large !== null ? props.profile.photos.large : userDefaultPhoto}
                          alt={'user photo'}
                          className={css.img}/>
                     <div className={css.photo_desc}>
                         <h5 className={css.photo_name}>{props.profile.fullName}</h5>
                         <span>{props.profile.aboutMe}</span>
                         <span>{props.profile.lookingForAJobDescription}</span>
                     </div>

            </section>
        )
    }

}