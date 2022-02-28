import Main from '../../pages/main/main';
// import FilmCard from '../film-card/film-card';

type appScreenProps = {
  genres: string [],
  cardsCount: number,
  promoFilmCard: {
    title: string,
    genre: string,
    year: number,
  },
  filmCard: {
    image:  {
      imageSrc:  string,
      imageAlt:  string,
    },
    filmHref:  string,
    filmTitle:  string,
  }
};


function App({promoFilmCard, filmCard, cardsCount, genres}: appScreenProps): JSX.Element {
  return <Main promoFilmCard={promoFilmCard} filmCard={filmCard} cardsCount={cardsCount} genres={genres} />;
}

export default App;
