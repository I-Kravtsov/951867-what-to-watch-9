import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';

type MyListScreenProps = {
  myFilmsCardsCount: number,
  filmCard: {
    image:  {
      imageSrc:  string,
      imageAlt:  string,
    },
    filmHref:  string,
    filmTitle:  string,
  }
};

function MyList({filmCard, myFilmsCardsCount}: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {new Array(myFilmsCardsCount).fill(<FilmCard filmCard={filmCard} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
