import React from 'react';
import logo from '../images/header__logo.svg';
import { Link } from "react-router-dom";

function Login({authorizateUser, isSuccess}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  function blurHandler(e) {
    switch (e.target.name) {
      case 'email': setEmailDirty(true)
      break
      case 'password': setPasswordDirty(true)
      break
      default: 
      break
    }
  }

  function handleEmail(e) { // отслеживать изменения в поле ввода
    setEmail(e.target.value);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegex.test(String(e.target.value).toLowerCase())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    };
  }

  function handlePassword(e) { // отслеживать изменения в поле ввода
    setPassword(e.target.value);
    if (e.target.value.length > 0) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    };
  }

  function handleFormSubmit(e) { // отправить форму
    e.preventDefault();
    authorizateUser(email, password);
  }

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    };
  }, [emailError, passwordError])

  React.useEffect(() => {
    setFormValid(false);
  }, [])

  return (
    <div className="page">
      <header className="header header_type_form">
        <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>
        <h1 className="header__title">Рады видеть!</h1>
      </header>
      <main className="main">
        <form className="form" onSubmit={handleFormSubmit} noValidate>
          <div className="form__input-block form__input-block_type_column">
            <p className="form__sign form__sign_type_column">E-mail</p>
            <input
              onBlur={blurHandler}
              type="email" id="email-input" name="email" value={email}
              onChange={handleEmail}
              className={`form__input form__input_type_column ` + ((emailDirty && emailError) ? `color_red` : ``)}
              placeholder="E-mail"></input>
          </div>
          <div className="form__input-block form__input-block_type_column form__input-block_type_no-margin-bottom">
            <p className="form__sign form__sign_type_column">Пароль</p>
            <input
              onBlur={blurHandler}
              type="password" id="password-input" name="password" value={password}
              onChange={handlePassword}
              className={`form__input form__input_type_column ` + ((passwordDirty && passwordError) ? `color_red` : ``)}
              placeholder="Пароль"></input>
          </div>
          <p className={`form__error ` + (isSuccess ? `display_none` : ``)}>Что-то пошло не так...</p>
          <button
            disabled={!formValid}
            type="submit"
            className={`form__submit form__submit_theme_blue ` + (!formValid ? `form__submit_disabled` : ``)}>
              Войти
          </button>
          <div className="form__link-block">
            <p className="form__question">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="form__link">Регистрация</Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;