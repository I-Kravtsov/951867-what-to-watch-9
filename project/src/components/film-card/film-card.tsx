type FilmCardProps = {
  filmCard: {
    image:  {
      imageSrc:  string,
      imageAlt:  string,
    },
    filmHref:  string,
    filmTitle:  string,
  }
}

function FilmCard({filmCard}:FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmCard.image.imageSrc} alt={filmCard.image.imageAlt} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={filmCard.filmHref}>{filmCard.filmTitle}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
