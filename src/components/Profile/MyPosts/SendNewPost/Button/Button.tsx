import React from "react";

type ButtonProps = {
    callback: () => void
    name: string
}

export const Button = (props:ButtonProps) => {

    const onClickHandler = () => {
        props.callback()
    }


        return (

            <button onClick={onClickHandler}>{props.name}</button>

        )

}