import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../utils/const';
import UserBlockAuthorized from '../user-block-authorized/user-block-authorized';
import UserBlockGuest from '../user-block-guest/user-block-guest';

function Header(): JSX.Element {
  const isAuthorized: boolean = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth;
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link" to='/'>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {isAuthorized ? <UserBlockAuthorized /> : <UserBlockGuest />}
    </header>
  );
}

export default Header;
