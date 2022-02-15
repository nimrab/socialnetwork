import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, loginFormTC, setAuthTC} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../../redux/redux-store";
import css from './Login.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'

export type FormValues = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

export const Login = () => {

    const state = useSelector<AppRootStateType, initialStateType>(state => state.auth)
    const dispatch = useDispatch()

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm<FormValues>({
        mode: "onBlur"
    })


    const loginOptions = {
        email: {
            required: "Email is required",
            minLength: {
                value: 6,
                message: "Login must have at least 6 characters"
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must have at least 6 characters"
            }
        }
    }


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
        console.log(JSON.stringify((data)))
        dispatch(loginFormTC(data))
        reset()
    }

    const onClickHandler = () => {
        dispatch(setAuthTC())
    }


    if (state.isAuth) {
        return <Redirect to='/'/>
    }

    return (
        <div>
            {state.isAuth
                ? <span>Hello, {state.login}! Your ID is {state.id}</span>

                : <div className={css.login_box}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            Login:
                            <input type={'email'} {...register('email', loginOptions.email)}/>
                        </label>
                        <div>{errors?.email && <span className={css.login_error}>{errors?.email.message}</span>}</div>

                        <label>
                            Password:
                            <input type={'password'}{...register('password', loginOptions.password)}/>
                        </label>
                        <div>{errors?.password &&
                        <span className={css.login_error}>{errors?.password.message}</span>}</div>


                        <label className={css.remember}>
                            <input type={'checkbox'} {...register('rememberMe')}/>
                             remember me
                        </label>

                        <input type={'submit'} disabled={!isValid}/>

                    </form>
                </div>
            }
        </div>
    )

}

