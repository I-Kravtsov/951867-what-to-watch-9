import request from 'axios';
import { store } from '../store';
import { setError, redirectToRoute } from '../store/action';
import { clearErrorAction } from '../store/api-actions';
import { ErrorType } from '../types/error';
import { HttpCode, AppRoute } from '../utils/const';

export const errorHandle = (error: ErrorType): void => {
  if(!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if(response) {
    switch(response.status) {
      case HttpCode.BAD_REQUEST:
        handleError(response.data.error);
        break;
    }
    switch(response.status) {
      case HttpCode.NOT_FOUND:
        handleError(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.NotFound));
        break;
    }
    switch(response.status) {
      case HttpCode.UNAUTHORIZED:
        handleError(response.data.error);
        break;
    }
  }
};


