import React from 'react';
import logo from '../images/header__logo.svg';

function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleName(e) { // отслеживать изменения в поле ввода
    setName(e.target.value);
  }

  function handleEmail(e) { // отслеживать изменения в поле ввода
    setEmail(e.target.value);
  }

  function handlePassword(e) { // отслеживать изменения в поле ввода
    setPassword(e.target.value);
  }

  function handleFormSubmit(e) { // отправить форму
    e.preventDefault();
  }

  return (
    <div className="page">
      <header className="header header_type_form">
        <a href="/" target="_blank"><img className="header__logo" src={logo} alt="лого" /></a>
        <h1 className="header__title">Добро пожаловать!</h1>
      </header>
      <main className="main">
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form__input-block form__input-block_type_column">
            <p className="form__sign form__sign_type_column">Имя</p>
            <input type="text" id="name-input" name="name" value={name} onChange={handleName} required className="form__input form__input_type_column" placeholder="Имя"></input>
          </div>
          <div className="form__input-block form__input-block_type_column">
            <p className="form__sign form__sign_type_column">E-mail</p>
            <input type="text" id="email-input" name="email" value={email} onChange={handleEmail} required className="form__input form__input_type_column" placeholder="E-mail"></input>
          </div>
          <div className="form__input-block form__input-block_type_column form__input-block_type_no-margin-bottom">
            <p className="form__sign form__sign_type_column">Пароль</p>
            <input type="password" id="password-input" name="email" value={password} onChange={handlePassword} required className="form__input form__input_type_column" placeholder="Пароль"></input>
          </div>
          <p className="form__error">Что-то пошло не так...</p>
          <button type="submit" className="form__submit form__submit_theme_blue">Зарегистрироваться</button>
          <div className="form__link-block">
            <p className="form__question">Уже зарегистрированы?</p>
            <a href="/signin" className="form__link">Войти</a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;