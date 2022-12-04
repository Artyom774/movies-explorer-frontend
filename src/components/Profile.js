import React from 'react';
import Header from './Header';
import Navigator from './Navigator';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Profile({ updatehUserInfo, setLoggedIn, setHistory }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  function handleName(e) { // отслеживать изменения в поле ввода
    setName(e.target.value);
    const nameRegex = /^[А-ЯЁA-Z-\s]{2,30}$/umi;
    if (!nameRegex.test(String(e.target.value))) {
      setNameError(true);
    } else {
      setNameError(false);
    };
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

  function handleFormSubmit(e) { // отправить форму
    e.preventDefault();
    updatehUserInfo(name, email);
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('searchingFilter');
    localStorage.removeItem('searchingText');
    setHistory('/');
  }

  React.useEffect(() => {
    if ((nameError || emailError) || (name === currentUser.name && email === currentUser.email)) {
      setFormValid(false);
    } else {
      setFormValid(true);
    };
  }, [name, email, nameError, emailError])

  React.useEffect(()=>{
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser])

  React.useEffect(() => {
    setFormValid(false);
  }, [])

  return (
    <div className="page">
      <Header setIsPopupOoen={setIsPopupOoen} />
      <main className="main">
        <h1 className="main__form-title">{`Привет, ` + currentUser.name + `!`}</h1>
        <form className="form" onSubmit={handleFormSubmit} noValidate>
          <div className="form__input-block form__input-block_type_row">
            <p className="form__sign form__sign_type_row">Имя</p>
            <input
              type="text" id="name-input" name="name" value={name}
              onChange={handleName}
              className={`form__input form__input_type_row ` + (nameError ? `color_red` : ``)}
              placeholder="Имя">
            </input>
          </div>
          <div className="form__input-block form__input-block_type_row">
            <p className="form__sign form__sign_type_row">E-mail</p>
            <input
              type="text" id="email-input" name="email" value={email}
              onChange={handleEmail}
              className={`form__input form__input_type_row ` + (emailError ? `color_red` : ``)}
              placeholder="E-mail"></input>
          </div>
          <button
            disabled={!formValid}
            type="submit"
            className={`form__submit form__submit_theme_white ` + (!formValid ? `color_gray` : ``)}>
              Редактировать
          </button>
          <button type="button" className="form__sign-out" onClick={handleSignOut}>Выйти из аккаунта</button>  
        </form>
      </main>
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'profile'} />
    </div>
  );
}

export default Profile;