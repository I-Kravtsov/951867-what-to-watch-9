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
      imageSrc:  'img/fantastic-beasts-the-crimes-of-grindelwald.jpg ',
      imageAlt:  'Fantastic Beasts: The Crimes of Grindelwald ',
    },
    filmHref:  'film-page.html ',
    filmTitle:  'Fantastic Beasts: The Crimes of Grindelwald ',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App promoFilmCard={settings.promoFilmCard} filmCard={settings.filmCard} cardsCount={settings.cardsCount} genres={settings.genres} />
  </React.StrictMode>,
  document.getElementById('root'));
