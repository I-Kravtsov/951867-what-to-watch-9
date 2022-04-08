import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
// import FilmCard from '../../components/film-card/film-card';
// import { FilmCardType } from '../../types/types';

// type MyListScreenProps = {
//   filmsList: FilmCardType[],
// };

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {/* {filmsList.map((filmCard: FilmCardType) => {
            const keyValue = filmCard.id;
            return <FilmCard filmCard={filmCard} key = {keyValue} />;
          })} */}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
