import { AuthorizationStatus } from '../../utils/const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { fetchToggleFavoriteFilmAction } from '../../store/api-actions';

type FilmCardButtonsProps = {
  isShowButton?: boolean,
  isFavotite: boolean,
  filmId: number,
}
function FilmCardButtons(props: FilmCardButtonsProps): JSX.Element {
  const {isShowButton, isFavotite, filmId} = props;


  const status = Number(!isFavotite);

  const authorisationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorisationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFavoriteButtonClick = (evt: React.MouseEvent): void => {
    evt.preventDefault();
    dispatch(fetchToggleFavoriteFilmAction({filmId, status}));
  };

  const handlePlayButtonClick = (evt: React.MouseEvent): void => {
    evt.preventDefault();
    navigate(`/player/:${filmId}`);
  };

  return (
    <div className="film-card__buttons">
      <button onClick={handlePlayButtonClick} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button onClick={handleFavoriteButtonClick} className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isFavotite ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {isAuthorized && isShowButton ? <Link to={`/films/${filmId}/review`} className="btn film-card__button">Add review</Link> : ''}
    </div>
  );
}

export default FilmCardButtons;
