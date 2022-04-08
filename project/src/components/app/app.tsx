import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import Film from '../../pages/film/film';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import MyList from '../../pages/my-list/my-list';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';


type appScreenProps = {
  genres: string [],
};


function App({ genres}: appScreenProps): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);
  const authorisationStatus = useAppSelector((state) => state.authorizationStatus);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorisationStatus={authorisationStatus}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorisationStatus={authorisationStatus}
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
    </HistoryRouter>
  );
}

export default App;
