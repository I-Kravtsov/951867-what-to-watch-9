import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { FilmCardType } from '../../types/types';

type FilmCardProps = {
  filmCard: FilmCardType
}

function FilmCard({filmCard}:FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmCard.image.src} alt={filmCard.image.alt} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{filmCard.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
