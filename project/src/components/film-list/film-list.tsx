import { FilmCardType } from '../../types/types';
import FilmCard from '../../components/film-card/film-card';

type FilmListScreenProps = {
  filmsList: FilmCardType[],
};

function FilmList({ filmsList }: FilmListScreenProps) {
  return (
    <div
      className="catalog__films-list"
    >
      {filmsList.map((filmCard: FilmCardType) => {
        const keyValue = filmCard.id;
        return <FilmCard  filmCard={filmCard} key = {keyValue } />;
      })}
    </div>
  );
}

export default FilmList;
