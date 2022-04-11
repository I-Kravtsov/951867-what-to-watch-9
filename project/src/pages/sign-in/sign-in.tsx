import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useRef, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';

function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement| null>(null);

  const dispatch = useAppDispatch();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorText, setErrorText] = useState('');

  const validatePassword = (value: string) => {
    if(!(/(?=.*\d)(?=.*[a-z])/i.test(value))) {
      setErrorText ('The password must contain numbers and letters');
      return;
    }
    setIsPasswordValid(true);
  };

  const handleInputPasswordChange = (pass: string) => {
    validatePassword(pass);
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(loginRef.current !== null && passwordRef.current !== null && isPasswordValid) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };


  return (
    <div className="user-page">
      <Header />

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>

          <div className="sign-in__message">
            <p>
              {errorText}
            </p>
          </div>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} onChange={(evt) => handleInputPasswordChange(evt.target.value)} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button  className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
