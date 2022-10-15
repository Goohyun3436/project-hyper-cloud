import { Map } from 'immutable';
const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const SET_ERROR = 'auth/SET_ERROR';

export const changeInput = () => ({ type: CHANGE_INPUT });
export const initializeForm = () => ({ type: INITIALIZE_FORM });
export const setError = () => ({ type: SET_ERROR });

const initialState = Map({
  signup: Map({
    form: Map({
      email: '',
      userid: '',
      password: '',
      passwordConfirm: '',
    }),
    error: null,
  }),
  login: Map({
    form: Map({
      email: '',
      password: '',
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
      console.log('hi');
      return state.setIn([form, 'error'], message);
    }

    default:
      return state;
  }
};

export default auth;
