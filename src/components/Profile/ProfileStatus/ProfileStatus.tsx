import React, {useState, KeyboardEvent, ChangeEvent, useEffect} from 'react';
import css from './ProfileStatus.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {getProfileStatusTC, setProfileStatusTC} from "../../../redux/profile-reducer";
import {ProfilePageType} from "../../../redux/store";

export const ProfileStatus = () => {


    const [isActive, setIsActive] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')

    const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    const authId = useSelector<AppRootStateType, number | null>(state => state.auth.id)
    const dispatch = useDispatch()

    useEffect(() => {
        if (profilePage.profile.userId !== null) {
            dispatch(getProfileStatusTC(profilePage.profile.userId))
            setTitle(profilePage.profile.status)
        }

    }, [])


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {

            dispatch(setProfileStatusTC(e.currentTarget.value))

            setIsActive(false)
            }
    }

    const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setProfileStatusTC(e.currentTarget.value))

        setIsActive(false)
    }

    const onChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onDoubleClickHandler = () => {
        if (authId === profilePage.profile.userId) {
            setIsActive(true)
        }
    }


    return (
        <div>
            {isActive
                ? <input
                    title={title}
                    className={css.input_status}
                    onKeyPress={onKeyPressHandler}
                    onChange={onChangeEventHandler}
                    onBlur={onBlurHandler}
                />
                : <span
                    className={css.span_status}
                    onDoubleClick={onDoubleClickHandler}
                >{title}</span>
            }


        </div>
    )
}
