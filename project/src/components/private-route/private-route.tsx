import { Navigate } from 'react-router-dom';
import {AppRoute, AuthorisationStatus} from '../../utils/const';


type PrivateRouteProps = {
  authorisationStatus: AuthorisationStatus;
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) {
  const {authorisationStatus, children} = props;
  return authorisationStatus === AuthorisationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
