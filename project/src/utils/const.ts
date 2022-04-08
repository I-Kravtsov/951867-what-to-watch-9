export const GENRES = {
  ALL: 'All genres',
  COMEDIES: 'Comedies',
  CRIME: 'Crime',
  DOCUMENTARY: 'Documentary',
  DRAMS: 'Dramas',
  HORROR: 'Horror',
  KIDS: 'Kids & Family',
  ROMANCE: 'Romance',
  SCIFI: 'Sci-Fi',
  THRILLER: 'Thrillers',
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmListCardsQuantity {
  CardsCount = 8,
  Step = 8,
  GenresCount = 9,
}

export enum APIRoute {
  FilmsList = '/films',
  Film = '/films/{filmId}',
  SimilarFilms = '/films/{filmId/similar}',
  PromoFilm = '/promo',
  Favorite = '/favorite',
  ToggleFavorite = '/favorite/{filmId}/{status}',
  Comments = '/comments/{filmId}',
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
