import { SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FilmCardType } from '../../types/types';
import Videoplayer from '../videoPlayer/videoPlayer';

type FilmCardProps = {
  filmCard: FilmCardType,
  activeCard?: FilmCardType | object,
  onMouseOver?(evt: SyntheticEvent): void,
  onMouseOut?(evt: SyntheticEvent): void,
}

function FilmCard({filmCard, activeCard, onMouseOver, onMouseOut}:FilmCardProps): JSX.Element {
  const isPlaying = filmCard === activeCard;
  const navigate = useNavigate();
  const handleFilmCardClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    navigate(`/films/${filmCard.id}`);
  };
  return (
    <article onClick={handleFilmCardClick} onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}  className="small-film-card catalog__films-card" >
      <Videoplayer isPlaying={isPlaying} filmCard={filmCard} />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmCard.id}`}>{filmCard.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
