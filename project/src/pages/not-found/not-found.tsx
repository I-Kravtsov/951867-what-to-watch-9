import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <div className="sign-in user-page__content">
        <img src="img/404.jpeg" alt="Page not found" />
      </div>

      <Footer />
    </div>
  );
}

export default NotFound;
