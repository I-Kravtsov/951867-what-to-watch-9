import { FilmCardType } from '../../types/types';
import FilmCard from '../../components/film-card/film-card';
import { useState, SyntheticEvent } from 'react';

type FilmListScreenProps = {
  filmsList: FilmCardType[],
};

function FilmList({ filmsList }: FilmListScreenProps) {
  const [activeCard, setActiveCard] = useState({});
  return (
    <div
      className="catalog__films-list"
    >
      {filmsList.map((filmCard: FilmCardType) => {
        const keyValue = filmCard.id;
        const handleFilmCardMouseOver = (evt:SyntheticEvent) => {
          setActiveCard(
            filmCard,
          );
        };
        const handleFilmCardMouseOut = (evt:SyntheticEvent) => {
          setActiveCard({});

        };
        return <FilmCard onMouseOver={ handleFilmCardMouseOver} onMouseOut={handleFilmCardMouseOut} filmCard={filmCard} activeCard={activeCard} key = {keyValue } />;
      })}
    </div>
  );
}

export default FilmList;
