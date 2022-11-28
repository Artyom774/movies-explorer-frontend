class MoviesApi {
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

  getMovies() {   // загрузка фильмов
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => {return this._processTheResponse(res)})
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies', // сервис beatfilm-movies с объектом
  headers: {
    'Content-Type': 'application/json'
  }
});