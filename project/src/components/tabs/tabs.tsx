import Overview from '../overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Tabs(): JSX.Element {
  const tabs = ['Overview', 'Details', 'Reviews'];
  const [currentTab, setCurrentTab] = useState('Overview');
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab) =>{
            const keyValue = tab;
            return (
              <li
                onClick={(evt) => {
                  evt.preventDefault();
                  setCurrentTab(tab);
                }}
                key={keyValue}
                className={tab === currentTab ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
              >
                <Link to="#" className="film-nav__link">{tab}</Link>
              </li>);
          })}
        </ul>
      </nav>
      {currentTab=== 'Overview' && <Overview />}
      {currentTab=== 'Details' && <Details />}
      {currentTab=== 'Reviews' && <Reviews />}
    </div>
  );
}

export default Tabs;
