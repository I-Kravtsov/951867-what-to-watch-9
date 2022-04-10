import { Link, useNavigate } from 'react-router-dom';
import { FilmCardType } from '../../types/types';
import Videoplayer from '../videoPlayer/videoPlayer';
import { useState, SyntheticEvent } from 'react';


type FilmCardProps = {
  filmCard: FilmCardType,
}

function FilmCard({filmCard}:FilmCardProps): JSX.Element {

  const [activeCard, setActiveCard] = useState({});
  const isPlaying = filmCard === activeCard;
  const navigate = useNavigate();

  const handleFilmCardClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    navigate(`/films/${filmCard.id}`);
  };

  let timeoutId: NodeJS.Timeout | null = null;
  const handleFilmCardMouseOver = (evt:SyntheticEvent) => {
    timeoutId = setTimeout(() => {
      setActiveCard(
        filmCard,
      );
    }, 1000);
  };

  const handleFilmCardMouseOut = (evt:SyntheticEvent) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveCard({});

  };
  return (
    <article onClick={handleFilmCardClick} onMouseEnter={handleFilmCardMouseOver} onMouseLeave={handleFilmCardMouseOut}  className="small-film-card catalog__films-card" >
      <Videoplayer isPlaying={isPlaying} filmCard={filmCard} />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmCard.id}`}>{filmCard.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
