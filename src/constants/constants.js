const { APP_BASE_URL, NODE_ENV } = process.env;
export const BASE_URL = NODE_ENV === 'development' ? 'http://localhost:3000' : APP_BASE_URL;
export const BEATFILM_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MOVIES_IMAGES_URL = 'https://api.nomoreparties.co';
export const SCREEN_TABLET = 768;
export const SCREEN_MOBILE = 480;
export const LENGTH_MOVIE_M = 5;
export const LENGTH_MOVIE_T = 7;
