import { createAction } from '@reduxjs/toolkit';
import { CommentsType, FilmCardType, FilmsListType } from '../types/types';
import { AppRoute, AuthorizationStatus } from '../utils/const';

export const setCurrentGenre = createAction('setCurrentGenre', (value: string) =>({payload: value}));
export const getFilmList = createAction('getFilmList', (value: Array<FilmCardType>) => ({payload: value}));
export const incrementCardsCount = createAction('incrementCardsCount');
export const resetCardsCount = createAction('resetCardsCount');
export const loadFilmsList = createAction<FilmsListType>('data/loadFilmsList');
export const loadPromoFilm = createAction<FilmCardType>('data/loadPromoFilm');
export const loadFilm = createAction<FilmCardType>('data/loadFilm');
export const loadSimilarFilms = createAction<FilmsListType>('data/loadSimilarFilms');
export const loadFavoriteFilms = createAction<FilmsListType>('data/loadFavoriteFilms');
export const toggleFavoriteFilm = createAction<FilmCardType>('data/toggleFavoriteFilm');
export const loadComments = createAction<CommentsType>('data/loadComments');
export const addComment = createAction<FilmCardType>('data/addComment');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('setError');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
