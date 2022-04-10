import CommentForm from '../../components/comment-form/comment-form';
import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import { FilmCardType } from '../../types/types';
import { useAppSelector } from '../../hooks';

function AddReview(): JSX.Element {

  const {id} = useParams();
  const film: FilmCardType = useAppSelector((state) => state.film);
  return (
    <section style={{backgroundColor: film.backgroundColor}} className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>
      <CommentForm filmId={Number(id)}  />

    </section>
  );
}

export default AddReview;
