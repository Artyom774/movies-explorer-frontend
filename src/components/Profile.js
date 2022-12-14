import React from 'react';
import Header from './Header';
import Navigator from './Navigator';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Profile = ({ updatehUserInfo, setLoggedIn, setHistory, editProfileSubmitText }) => {
  const currentUser = React.useContext(CurrentUserContext); // данные о текущем пользователе
  const [isPopupOpen, setIsPopupOoen] =React.useState(false); // открыть окно с навигацией?
  const [name, setName] = React.useState(''); // значение инпута в поле name
  const [email, setEmail] = React.useState(''); // значение инпута в поле email
  const [nameError, setNameError] = React.useState(false); // есть ошибки в поле name?
  const [emailError, setEmailError] = React.useState(false); // есть ошибки в поле email?
  const [formValid, setFormValid] = React.useState(false); // форма удовлетворяет валилации?

  const handleName = (e) => { // отслеживать изменения в поле ввода
    setName(e.target.value);
    const nameRegex = /^[А-ЯЁA-Z-\s]{2,30}$/umi;
    if (!nameRegex.test(String(e.target.value))) {
      setNameError(true);
    } else {
      setNameError(false);
    };
  }

  const handleEmail = (e) => { // отслеживать изменения в поле ввода
    setEmail(e.target.value);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegex.test(String(e.target.value).toLowerCase())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    };
  }

  const handleFormSubmit = (e) => { // отправить форму
    e.preventDefault();
    updatehUserInfo(name, email);
  }

  const handleSignOut = () => {
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
  }, [name, email, nameError, emailError, currentUser])

  React.useEffect(()=>{
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser])

  React.useEffect(() => {
    setFormValid(false);
  }, [])

  return (
    <div className="page">
      <Header
        setIsPopupOoen={setIsPopupOoen}
        page={'profile'} />
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
            disabled={!formValid || editProfileSubmitText !== 'Редактировать'}
            type="submit"
            className={`form__submit form__submit_theme_white ` + ((!formValid || editProfileSubmitText !== 'Редактировать') ? `color_gray` : ``)}>
              {editProfileSubmitText}
          </button>
          <button type="button" className="form__sign-out" onClick={handleSignOut}>Выйти из аккаунта</button>  
        </form>
      </main>
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'profile'} />
    </div>
  );
}

export default Profile;