import React from 'react';
import Header from './Header';
import Navigator from './Navigator';

function Profile(props) {
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);
  const [inputName, setInputName] = React.useState('');
  const [setEmail, setInputEmail] = React.useState('');

  function handleName(e) { // отслеживать изменения в поле ввода
    setInputName(e.target.value);
  }

  function handleEmail(e) { // отслеживать изменения в поле ввода
    setInputEmail(e.target.value);
  }

  function handleFormSubmit(e) { // отправить форму
    e.preventDefault();
  }

  return (
    <div className="page">
      <Header setIsPopupOoen={setIsPopupOoen} />
      <main className="main">
        <h1 className="main__form-title">{`Привет, ` + props.name + `!`}</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form__input-block form__input-block_type_row">
            <p className="form__sign form__sign_type_row">Имя</p>
            <input type="text" id="name-input" name="name" value={inputName} onChange={handleName} required className="form__input form__input_type_row" placeholder="Имя"></input>
          </div>
          <div className="form__input-block form__input-block_type_row">
            <p className="form__sign form__sign_type_row">E-mail</p>
            <input type="text" id="email-input" name="email" value={setEmail} onChange={handleEmail} required className="form__input form__input_type_row" placeholder="E-mail"></input>
          </div>
          <button type="submit" className="form__submit form__submit_theme_white">Редактировать</button>
          <button type="button" className="form__sign-out">Выйти из аккаунта</button>  
        </form>
      </main>
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'profile'} />
    </div>
  );
}

export default Profile;