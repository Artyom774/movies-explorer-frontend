import React from 'react';
import Header from './Header';
import Navigator from './Navigator';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);
  const [inputName, setInputName] = React.useState('');
  const [inputEmail, setInputEmail] = React.useState('');

  function handleName(e) { // отслеживать изменения в поле ввода
    setInputName(e.target.value);
  }

  function handleEmail(e) { // отслеживать изменения в поле ввода
    setInputEmail(e.target.value);
  }

  function handleFormSubmit(e) { // отправить форму
    e.preventDefault();
    props.updatehUserInfo(inputName, inputEmail);
  }

  function handleSignOut() {
    props.setLoggedIn(false);
    localStorage.removeItem('token');
    props.setHistory('/');
  }

  React.useEffect(()=>{
    setInputName(currentUser.name);
    setInputEmail(currentUser.email);
  }, [currentUser])

  return (
    <div className="page">
      <Header setIsPopupOoen={setIsPopupOoen} />
      <main className="main">
        <h1 className="main__form-title">{`Привет, ` + currentUser.name + `!`}</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form__input-block form__input-block_type_row">
            <p className="form__sign form__sign_type_row">Имя</p>
            <input type="text" id="name-input" name="name" value={inputName} onChange={handleName} required className="form__input form__input_type_row" placeholder="Имя"></input>
          </div>
          <div className="form__input-block form__input-block_type_row">
            <p className="form__sign form__sign_type_row">E-mail</p>
            <input type="text" id="email-input" name="email" value={inputEmail} onChange={handleEmail} required className="form__input form__input_type_row" placeholder="E-mail"></input>
          </div>
          <button type="submit" className="form__submit form__submit_theme_white">Редактировать</button>
          <button type="button" className="form__sign-out" onClick={handleSignOut}>Выйти из аккаунта</button>  
        </form>
      </main>
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'profile'} />
    </div>
  );
}

export default Profile;