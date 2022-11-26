import React from 'react';

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <a href="/" className="not-found__link">Назад</a>
    </div>
  );
}

export default NotFound;