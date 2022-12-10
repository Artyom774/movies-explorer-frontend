import React from 'react';

function NotFound({ history }) {
  function handleButton() {
    history.goBack();
  }

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <a className="not-found__link" onClick={handleButton}>Назад</a>
    </div>
  );
}

export default NotFound;