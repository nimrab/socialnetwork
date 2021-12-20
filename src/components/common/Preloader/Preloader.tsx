import React from 'react';
import preloader from "../../../assets/images/preloader.gif";
import css from './Preloader.module.css'

export const Preloader = () => {
    return (
        <>
            <img src={preloader} alt='loading' className={css.img}/>
        </>
    );
};

