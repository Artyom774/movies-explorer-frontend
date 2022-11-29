class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _processTheResponse(res) {
    if (res.ok) {
      return res.json();
    };
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(token) {   // загрузка сведений о пользователе со сервера
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      credentials: "include"
    })
    .then(res => {return this._processTheResponse(res)})
  }

  refreshUserInfo(data, token) {   // отправка обновлённых данных о пользователе
    return fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    credentials: "include",
    body: JSON.stringify({
      email: data.email,
      name: data.name
    })})
    .then(res => {return this._processTheResponse(res)})
  }

  getSavedMovies(token) {   // загрузка сохранённых фильмов
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      credentials: "include"
    })
    .then(res => {return this._processTheResponse(res)})
  }

  savedNewMovie(data, token) {   // сохранение нового фильма
    return fetch(`${this._baseUrl}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    credentials: "include",
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image,
      trailerLink: data.trailerLink,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      thumbnail: data.thumbnail,
      movieId: data.movieId
    })})
    .then(res => {return this._processTheResponse(res)})
  }

  deleteMovie(movieId, token) {  // удалить сохранённый фильм
    return fetch(`${this._baseUrl}/cards/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      credentials: "include"
    })
    .then(res => {return this._processTheResponse(res)})
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.your-mesto.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
});