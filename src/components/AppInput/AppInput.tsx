import React from "react";

type  AppInputProps = {
    type: 'tel' | 'password' | 'email'
    inputPlaceholder: string
}

export const AppInput = ({ inputPlaceholder, type }: AppInputProps) => {
    return (
        <input placeholder={inputPlaceholder} />
    )
}
