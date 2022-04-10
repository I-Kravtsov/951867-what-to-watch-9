import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/film-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { resetCardsCount } from '../../store/action';

function MyList(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
    dispatch(resetCardsCount());
  }, [dispatch]);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const cardsCount = useAppSelector((state) => state.cardsCount);
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList filmsList={favoriteFilms.slice(0, cardsCount)} />
        {favoriteFilms.length > cardsCount ? <ShowMoreButton /> : ''}
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
