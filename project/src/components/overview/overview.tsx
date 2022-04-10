import { useAppSelector } from '../../hooks';
import { FilmCardType} from '../../types/types';

function Overview () {
  const film: FilmCardType = useAppSelector((state) => state.film);
  const getRatingLevel = (rating: number) => {
    if(rating === 10) {
      return 'Awesome';
    }
    if(rating > 8) {
      return 'Very good';
    }
    if(rating > 5) {
      return 'Good';
    }
    if(rating > 3) {
      return 'Normal';
    }
    return 'Bad';
  };
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default Overview;
