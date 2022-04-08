import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../store/';
import { store } from '../store';
import { FilmsListType, FilmCardType } from '../types/types';
import { loadFilmsList, loadPromoFilm, requireAuthorization, setError, redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { AuthorizationStatus, APIRoute, TIMEOUT_SHOW_ERROR, AppRoute } from '../utils/const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import {errorHandle} from '../services/error-handle';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsListAction = createAsyncThunk(
  'data/fetchFilmsList',
  async () => {
    try {
      const {data} = await api.get<FilmsListType>(APIRoute.FilmsList);
      store.dispatch(loadFilmsList(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const {data} = await api.get<FilmCardType>(APIRoute.PromoFilm);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.MyList));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    } catch(error) {
      errorHandle(error);
    }
  },
);
