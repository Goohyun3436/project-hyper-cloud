import { Map } from 'immutable';
import * as AuthAPI from '../lib/api/auth';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const SET_ERROR = 'auth/SET_ERROR';
const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS';
const CHECK_USERID_EXISTS = 'auth/CHECK_USERID_EXISTS';

export const changeInput = () => ({ type: CHANGE_INPUT });
export const initializeForm = () => ({ type: INITIALIZE_FORM });
export const setError = () => ({ type: SET_ERROR });
export const checkEmailExists = () => ({ type: CHECK_EMAIL_EXISTS });
export const checkUseridExists = () => ({ type: CHECK_USERID_EXISTS });

const initialState = Map({
  signup: Map({
    form: Map({
      email: '',
      userid: '',
      password: '',
      passwordConfirm: '',
    }),
    exists: Map({
      email: false,
      password: false,
    }),
    error: null,
  }),
  login: Map({
    form: Map({
      email: '',
      password: '',
    }),
    exists: Map({
      email: false,
      password: false,
    }),
    error: null,
  }),
});

const auth = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const { name, value, form } = action;
      return state.setIn([form, 'form', name], value);
    }

    case INITIALIZE_FORM: {
      const initialForm = initialState.get(action.form);
      return state.set(action.form, initialForm);
    }

    case SET_ERROR: {
      const { form, message } = action;
      return state.setIn([form, 'error'], message);
    }

    case CHECK_EMAIL_EXISTS: {
      const { exists } = action;
      return state.setIn(['register', 'exists', 'email'], exists);
    }

    case CHECK_USERID_EXISTS: {
      const { exists } = action;
      return state.setIn(['register', 'exists', 'userid'], exists);
    }

    default:
      return state;
  }
};

export default auth;
