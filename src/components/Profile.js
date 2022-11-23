import React from 'react';
import Header from './Header';

function Profile(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleName(e) { // отслеживать изменения в поле ввода
    setName(e.target.value);
  }

  function handleEmail(e) { // отслеживать изменения в поле ввода
    setEmail(e.target.value);
  }

  function handleFormSubmit(e) { // отправить форму
    e.preventDefault();
  }

  return (
    <div className="page">
      <Header />
      <main className="main">
        <h1 className="main__form-title">{`Привет, ` + props.name + `!`}</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form__input-block form__input-block_type_row">
            <p className="form__field form__field_type_row">Имя</p>
            <input type="text" id="name-input" name="name" value={name} onChange={handleName} required className="form__input form__input_type_row" placeholder="Имя"></input>
          </div>
          <div className="form__input-block form__input-block_type_row">
            <p className="form__field form__field_type_row">E-mail</p>
            <input type="text" id="email-input" name="email" value={email} onChange={handleEmail} required className="form__input form__input_type_row" placeholder="E-mail"></input>
          </div>
          <button type="submit" className="form__submit">Редактировать</button>
          <button type="button" className="form__sign-out">Выйти из аккаунта</button>  
        </form>
      </main>
    </div>
  );
}

export default Profile;