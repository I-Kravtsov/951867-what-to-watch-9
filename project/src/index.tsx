import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { GENRES } from './utils/const';
// import { promoFilm, filmsList } from './mock/mock';
import { Provider } from 'react-redux';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import { checkAuthAction, fetchFilmsListAction, fetchPromoFilmAction } from './store/api-actions';


const settings = {
  genres: Object.values(GENRES),
};

store.dispatch(fetchFilmsListAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App genres={settings.genres} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
