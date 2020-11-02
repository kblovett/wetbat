import axios from 'axios';

// constant imports
import {
  AGENT_LOGIN_REQUEST,
  AGENT_LOGIN_SUCCESS,
  AGENT_LOGIN_FAIL,
  AGENT_LOGOUT,
  DASHBOARD_BOOKINGS_RESET,
  BOOKING_CONTAINER_RESET,
} from '../constants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: AGENT_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/agents/login',
      { email, password },
      config
    );
    dispatch({
      type: AGENT_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('agentInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: AGENT_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('agentInfo');
  dispatch({ type: AGENT_LOGOUT });
  dispatch({ type: DASHBOARD_BOOKINGS_RESET });
  dispatch({ type: BOOKING_CONTAINER_RESET });
};
