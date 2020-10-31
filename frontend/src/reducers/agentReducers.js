import {
  AGENT_LOGIN_REQUEST,
  AGENT_LOGIN_SUCCESS,
  AGENT_LOGIN_FAIL,
  AGENT_LOGOUT,
} from '../constants';

export const agentLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case AGENT_LOGIN_REQUEST:
      return { loading: true };
    case AGENT_LOGIN_SUCCESS:
      return { loading: false, agentInfo: action.payload };
    case AGENT_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case AGENT_LOGOUT:
      return {};

    default:
      return state;
  }
};
