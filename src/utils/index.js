/* eslint-disable no-console */
import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');
    const { request_token: token } = data;

    if (data.success) {
      localStorage.setItem('token', token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log('Something went wrong!');
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem('token');
  let sessionId;

  try {
    const { data: {
      session_id: fetchSessionId,
    } } = await moviesApi.post('/authentication/session/new', {
      request_token: token,
    });
    if (fetchSessionId) {
      localStorage.setItem('session_id', fetchSessionId);
      sessionId = fetchSessionId;
    }
  } catch (error) {
    console.log(error);
  }

  return sessionId;
};

export const getUserData = async () => {
  const sessionId = localStorage.getItem('session_id');
  let userData;

  try {
    const { data: fetchedUserData } = await moviesApi.get(`/account?session_id=${sessionId}`);
    userData = fetchedUserData;
  } catch (error) {
    console.log(error);
  }

  return userData;
};
