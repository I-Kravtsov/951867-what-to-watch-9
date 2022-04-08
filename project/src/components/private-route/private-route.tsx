import { Navigate } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';


type PrivateRouteProps = {
  authorisationStatus: string;
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) {
  const {authorisationStatus, children} = props;
  return authorisationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
