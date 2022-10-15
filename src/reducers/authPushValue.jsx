import { Map } from 'immutable';
const CHANGE_INPUT = 'authPushValue/CHANGE_INPUT';
const INITIALIZE_FORM = 'authPushValue/INITIALIZE_FORM';

export const changeInput = () => ({ type: CHANGE_INPUT });
export const initializeForm = () => ({ type: INITIALIZE_FORM });

const initialState = Map({
  signup: Map({
    form: Map({
      email: '',
      userid: '',
      password: '',
      passwordConfirm: '',
    }),
  }),
  login: Map({
    form: Map({
      email: '',
      password: '',
    }),
  }),
});

const authPushValue = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      const { name, value, form } = action;
      return state.setIn([form, 'form', name], value);
    case INITIALIZE_FORM:
      const initialForm = initialState.get(action.form);
      return state.set(action.form, initialForm);
    default:
      return state;
  }
};

export default authPushValue;
