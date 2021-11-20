import React, {ChangeEvent, RefObject} from "react";
import css from "../SendNewPost.module.css";


export type TextareaPropsType = {
    value: string
    onChange: (value: string) => void
    placeholder: string
    onClick?: () => void
    onBlur?: () => void
}


export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaPropsType>((props, ref) => {


    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(event.currentTarget.value)
    }


    return (

        <textarea
            ref={ref}
            value={props.value}
            onChange={onChange}
            className={css.post_input}
            placeholder={props.placeholder}
        />

    )

})
