import axios from 'axios';

// constant imports
import {
  BOOKING_CONTAINER_REQUEST,
  BOOKING_CONTAINER_SUCCESS,
  BOOKING_CONTAINER_FAIL,
} from '../constants';

export const getBookingContainer = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOKING_CONTAINER_REQUEST,
    });

    const {
      agentLogin: { agentInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${agentInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/bookings/${id}`, config);
    dispatch({
      type: BOOKING_CONTAINER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BOOKING_CONTAINER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
