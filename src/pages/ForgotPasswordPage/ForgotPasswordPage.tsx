import React from "react";
import './ForgotPasswordPage.scss'
import { Container } from "../../components/Container/Container";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppInput } from "../../components/AppInput/AppInput";
import { Paragraph } from "../../components/Paragraph/Paragraph";

export const ForgotPasswordPage = () => {
    return (
        <Container>
        <div className="LoginPage">
        <AppHeader type="h1" headerText="Забыли пароль?"/>
          <form action="#">
            <Paragraph ParagraphText="Укажите свой номер телефона, чтобы получить код для сброса пароля."/>
            <AppInput type="email" inputPlaceholder="Email"/>
            <button>Отправить</button>
          </form>
        </div>
        </Container>
    )
}