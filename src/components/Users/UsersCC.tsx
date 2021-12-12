import React from 'react';
import css from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import userDefaultPhoto from '../../assets/userDefault.png'


export class UsersCC extends React.Component<any , any>{

constructor(props:any) {
    super(props);

    const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers:     {
            "API-KEY": "21183"
        }
    });

    instance.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
        props.addMoreUsers(response.data.items)
    })


}



    clickHandler = (id: string, followed: boolean) => {

        followed ? this.props.unfollowUser(id) : this.props.followUser(id)

    }
    //@ts-ignore
    usersDataToComp =  this.props.usersPage.users.map(el => {
        return (

            <section className={css.user_box} key={el.id}>

                <div>
                    <img
                        src={el.photos.small !== null ? el.photos.small : userDefaultPhoto}
                        alt='user photo'
                        className={css.img}
                    />
                    <div
                        className={css.follow_btn}
                        onClick={() => this.clickHandler(el.id, el.followed)}
                    >
                        {el.followed ? 'Unfollow' : 'Follow'}
                    </div>
                </div>

                <div className={css.user_info_box}>

                    <div className={css.user_name}>
                        <h5>Name:{el.name}</h5>
                        <h6>Status: {el.status}</h6>
                    </div>


                    <div className={css.user_location}>
                        <h5>Country: {'el.location.country'}</h5>
                        <h6>City: {'el.location.city'}</h6>
                    </div>

                </div>

            </section>
        )


    })

render() {

    return (
        <>{this.usersDataToComp}</>
    )
}



}

