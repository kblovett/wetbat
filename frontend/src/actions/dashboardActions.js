import axios from 'axios';

// constant imports
import {
  DASHBOARD_BOOKINGS_REQUEST,
  DASHBOARD_BOOKINGS_SUCCESS,
  DASHBOARD_BOOKINGS_FAIL,
} from '../constants';

export const dashboardGetBookings = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DASHBOARD_BOOKINGS_REQUEST,
    });

    const {
      agentLogin: { agentInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${agentInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/bookings', config);
    dispatch({
      type: DASHBOARD_BOOKINGS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DASHBOARD_BOOKINGS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
