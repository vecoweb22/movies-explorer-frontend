import { BEATFILM_URL } from '../constants/constants';

export class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponce(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(BEATFILM_URL, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: BEATFILM_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
