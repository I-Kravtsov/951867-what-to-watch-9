import { createReducer } from '@reduxjs/toolkit';
import { FilmsListType, FilmCardType, CommentsType } from '../types/types';
import { setCurrentGenre, incrementCardsCount, resetCardsCount, loadFavoriteFilms, loadFilmsList, toggleFavoriteFilm, loadComments, loadSimilarFilms, loadPromoFilm, loadFilm, requireAuthorization, setError } from './action';
import { AuthorizationStatus } from '../utils/const';

const cardsCountStep = +8;

type initialStateType = {
  genre: string,
  filmsList: FilmsListType,
  similarFilms: FilmsListType,
  favoriteFilms: FilmsListType,
  promoFilm: FilmCardType,
  film: FilmCardType,
  cardsCount: number,
  authorizationStatus: string,
  isDataLoaded: boolean,
  error: string,
  comments: CommentsType,
}

const initialState: initialStateType = {
  genre: 'All genres',
  filmsList: [],
  similarFilms: [],
  favoriteFilms: [],
  comments: [],
  promoFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  film: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  cardsCount: 8,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentGenre, (state, action) => {
      state.genre = action.payload;
    })
    // .addCase(getFilmList, (state, action) => {
    //   state.filmsList = action.payload;
    // })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(toggleFavoriteFilm, (state, action) => {
      state.film = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(incrementCardsCount, (state) => {state.cardsCount += cardsCountStep;})
    .addCase(resetCardsCount, (state) => {state.cardsCount = 8;
    })
    .addCase(loadFilmsList, (state, action) => {
      state.filmsList = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
