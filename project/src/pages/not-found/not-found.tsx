import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <div className="sign-in user-page__content">
        <Link to='/'>
          <img src="img/404.jpeg" alt="Page not found" />
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default NotFound;
