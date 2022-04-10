import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { FilmCardType, FilmsListType} from '../../types/types';
import NotFound from '../../pages/not-found/not-found';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmAction, fetchSimilarFilmAction, fetchCommentsAction } from '../../store/api-actions';
import Tabs from '../../components/tabs/tabs';
import FilmsList from '../../components/film-list/film-list';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

function Film(): JSX.Element {
  const similarFilmsCount = 4;
  const {id} =useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilmAction(Number(id)));
    dispatch(fetchSimilarFilmAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
  }, [dispatch,id]);
  const film: FilmCardType = useAppSelector((state) => state.film);
  const similarFilms: FilmsListType = useAppSelector((state) => state.similarFilms);
  if(!film) {
    return <NotFound />;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <FilmCardButtons isShowButton isFavotite={film.isFavorite} filmId={film.id} />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>
            <Tabs />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList filmsList={similarFilms.slice(0, similarFilmsCount)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
