import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../utils/const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import Film from '../../pages/film/film';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import MyList from '../../pages/my-list/my-list';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { FilmCardType, PromoFilmCardType } from '../../types/types';

type appScreenProps = {
  genres: string [],
  cardsCount: number,
  promoFilmCard: PromoFilmCardType,
  filmCard: FilmCardType,
};


function App({promoFilmCard, filmCard, cardsCount, genres}: appScreenProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main promoFilmCard={promoFilmCard} filmCard={filmCard} cardsCount={cardsCount} genres={genres} />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.Film}
          element={<Film promoFilmCard={promoFilmCard} filmCard={filmCard} cardsCount={cardsCount} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorisationStatus={AuthorisationStatus.NotAuth}
            >
              <MyList filmCard={filmCard} myFilmsCardsCount={cardsCount}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorisationStatus={AuthorisationStatus.NotAuth}
            >
              <AddReview/>
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
