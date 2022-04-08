export type FilmCardType = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
};

export type FilmsListType = FilmCardType [];

export type comment = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    id: number
    name: string
  }
};
