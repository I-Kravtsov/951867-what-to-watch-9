import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { nanoid } from '@reduxjs/toolkit';
import FilmsList from '../../components/film-list/film-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { FilmListCardsQuantity} from '../../utils/const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {incrementCardsCount, resetCardsCount, setCurrentGenre} from '../../store/action';
import { Link } from 'react-router-dom';


function Main(): JSX.Element {

  const genresList: Set<string> = new Set();
  const filmsList = useAppSelector((state) => state.filmsList);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  filmsList.forEach((film) =>  genresList.add(film.genre));
  const genres: string[] = ['All genres', ...Array.from(genresList).slice(0, FilmListCardsQuantity.GenresCount)];

  const currentGenre = useAppSelector((state) => state.genre);
  const cardsCount = useAppSelector((state) => state.cardsCount);

  const dispatch = useAppDispatch();

  const onGenreClickHandler = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLElement;
    if (!(target.tagName === 'A')) {
      return;
    }
    dispatch(setCurrentGenre(target.innerText));
    dispatch(resetCardsCount());
  };

  const onMoreButtonClickHandler = () => {
    dispatch(incrementCardsCount());
  };

  const filteredFilmList = () => {
    if (currentGenre === 'All genres') {
      return filmsList;
    }
    return filmsList.filter((film)=> film.genre === currentGenre);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
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


          <ul className="catalog__genres-list" onClick={(evt: React.MouseEvent<HTMLElement>) => {
            evt.preventDefault();
            onGenreClickHandler(evt);
          }}
          >
            {genres.map ((genre) => (
              <li key={nanoid()} className={genre === currentGenre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
                <Link to='#' className="catalog__genres-link">{genre}</Link>
              </li>),
            )}
          </ul>
          <FilmsList filmsList={filteredFilmList().slice(0, cardsCount)} />
          {filteredFilmList().length > cardsCount ? <ShowMoreButton onMoreButtonClick={onMoreButtonClickHandler}  /> : ''}
        </section>

        <Footer />
      </div>
    </>
  );
}
export default Main;
