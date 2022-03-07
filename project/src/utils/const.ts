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

export enum AuthorisationStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}
