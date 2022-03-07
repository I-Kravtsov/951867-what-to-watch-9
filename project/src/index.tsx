import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { GENRES } from './utils/const';


const settings = {
  genres: Object.values(GENRES),
  cardsCount: 20,
  promoFilmCard: {
    title: 'The Grand Budapest Hotel',
    genre: GENRES.DRAMS,
    year: 2014,
  },
  filmCard: {
    image: {
      src:  'img/fantastic-beasts-the-crimes-of-grindelwald.jpg ',
      alt:  'Fantastic Beasts: The Crimes of Grindelwald ',
    },
    href:  'film-page.html ',
    title:  'Fantastic Beasts: The Crimes of Grindelwald ',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App promoFilmCard={settings.promoFilmCard} filmCard={settings.filmCard} cardsCount={settings.cardsCount} genres={settings.genres} />
  </React.StrictMode>,
  document.getElementById('root'));
