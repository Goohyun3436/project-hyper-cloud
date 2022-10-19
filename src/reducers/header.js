import { Map } from 'immutable';

const PUT_IN_TOKEN = 'header/PUT_IN_TOKEN';
const PUT_IN_USERINFO = 'header/PUT_IN_USERINFO';
const REMOVE_TOKEN = 'header/REMOVE_TOKEN';

export const putInToken = () => ({ type: PUT_IN_TOKEN });
export const putInUserInfo = () => ({ type: PUT_IN_USERINFO });
export const removeToken = () => ({ type: REMOVE_TOKEN });

const initialState = Map({
  token: localStorage.getItem('login-token'),
  userInfo: JSON.parse(localStorage.getItem('userInfo')),
});

const header = (state = initialState, action) => {
  switch (action.type) {
    case PUT_IN_TOKEN: {
      const { token } = action;
      localStorage.setItem('login-token', token);
      return state.setIn(['token'], token);
    }

    case PUT_IN_USERINFO: {
      const { userInfo } = action;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      return state.setIn(['userInfo'], userInfo);
    }

    case REMOVE_TOKEN: {
      localStorage.removeItem('login-token');
      localStorage.removeItem('userInfo');
      return initialState;
    }
    default:
      return state;
  }
};

export default header;
