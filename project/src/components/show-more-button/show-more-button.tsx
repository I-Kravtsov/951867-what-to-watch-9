type ShowMoreButtonProps = {
  onMoreButtonClick(): void,
}


function ShowMoreButton ({onMoreButtonClick}: ShowMoreButtonProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick= {onMoreButtonClick}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
