import { Link } from 'react-router-dom';
// import { useAppDispatch } from '../../hooks';
// import { logoutAction } from '../../store/api-actions';

function UserBlockGuest(): JSX.Element {
  // const dispatch = useAppDispatch();

  return (
    <div className="user-block">
      <Link to='/login' className="user-block__link">Sign in</Link>
    </div>
  );
}

export default UserBlockGuest;
