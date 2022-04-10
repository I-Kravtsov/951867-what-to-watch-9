import { useAppDispatch } from '../../hooks';
import {incrementCardsCount } from '../../store/action';


function ShowMoreButton () {
  const dispatch = useAppDispatch();
  const onMoreButtonClickHandler = () => {
    dispatch(incrementCardsCount());
  };
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick= {onMoreButtonClickHandler}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
