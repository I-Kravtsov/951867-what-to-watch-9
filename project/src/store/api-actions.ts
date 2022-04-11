import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../store/';
import { store } from '../store';
import { FilmsListType, FilmCardType, CommentsType, NewCommentType } from '../types/types';
import { loadFilmsList, loadFavoriteFilms, loadAvatarUrl, loadPromoFilm, loadFilm, loadSimilarFilms, toggleFavoriteFilm, requireAuthorization, setError, redirectToRoute, loadComments, addComment } from './action';
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

export const fetchFavoriteFilmsAction = createAsyncThunk(
  'data/fetchFavoriteFilms',
  async () => {
    try {
      const {data} = await api.get<FilmsListType>(APIRoute.Favorite);
      store.dispatch(loadFavoriteFilms(data));
    } catch (error) {
      errorHandle(error);
    }
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

export const fetchToggleFavoriteFilmAction = createAsyncThunk(
  'data/fetchToggleFavoriteFilm',
  async ({filmId, status}: {filmId: number, status: number}) => {
    try {
      const {data} = await api.post<FilmCardType>(`${APIRoute.ToggleFavorite}${filmId}/${status}`);
      await store.dispatch(toggleFavoriteFilm(data));
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Login));
    }
  },
);
export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilm',
  async (filmId: number) => {
    try {
      const {data} = await api.get<FilmCardType>(`${APIRoute.Film}${filmId}`);
      store.dispatch(loadFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSimilarFilmAction = createAsyncThunk(
  'data/fetchSimilarFilm',
  async (filmId: number) => {
    try {
      const {data} = await api.get<FilmsListType>(`${APIRoute.Film}${filmId}/similar`);
      store.dispatch(loadSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (filmId: number) => {
    try {
      const {data} = await api.get<CommentsType>(`${APIRoute.Comments}${filmId}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchAddCommentAction = createAsyncThunk(
  'data/fetchAddComment',
  async ({filmId, comment, rating}:{filmId: number, comment: string, rating: number}) => {
    try {
      const {data} = await api.post<NewCommentType>(`${APIRoute.Comments}${filmId}`, {comment, rating});
      store.dispatch(addComment(data));
      store.dispatch(redirectToRoute(`/films/${filmId}`));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data : {avatarUrl}} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(loadAvatarUrl(avatarUrl));
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
      const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(loadAvatarUrl(avatarUrl));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.MyList));
    } catch(error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Login));
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      store.dispatch(redirectToRoute(AppRoute.Root));
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    } catch(error) {
      errorHandle(error);
    }
  },
);
