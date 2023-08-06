import { BASE_URL } from '../constants/constants';

function getResp(res) {
  if (!res.ok) {
    return res.json().then((res) => {
      throw new Error(res.message);
    });
  }
  return res.json();
}

export const signup = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password, name }),
  }).then((res) => getResp(res));
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
    .then((res) => getResp(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem('isAuth', true);
        return data;
      }
    });
};

export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
  }).then((res) => {
    localStorage.removeItem('isAuth');
    getResp(res);
  });
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => getResp(res));
};
