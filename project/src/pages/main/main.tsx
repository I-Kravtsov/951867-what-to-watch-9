import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';
import { nanoid } from '@reduxjs/toolkit';

type MainScreenProps = {
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

function Main({promoFilmCard, filmCard, cardsCount, genres}: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmCard.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmCard.genre}</span>
                <span className="film-card__year">{promoFilmCard.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map ((genre) => (
              <li key={nanoid()} className="catalog__genres-item catalog__genres-item--active">
                <a href="#" className="catalog__genres-link">{genre}</a>
              </li>),
            )}
          </ul>
          <div className="catalog__films-list">
            {new Array(cardsCount).fill(<FilmCard filmCard={filmCard} />)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
export default Main;
