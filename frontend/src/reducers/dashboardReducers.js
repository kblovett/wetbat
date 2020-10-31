import {
  DASHBOARD_BOOKINGS_REQUEST,
  DASHBOARD_BOOKINGS_SUCCESS,
  DASHBOARD_BOOKINGS_FAIL,
  DASHBOARD_BOOKINGS_RESET,
} from '../constants';

export const dashboardBookingsReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case DASHBOARD_BOOKINGS_REQUEST:
      return { loading: true };
    case DASHBOARD_BOOKINGS_SUCCESS:
      return { loading: false, bookings: action.payload };
    case DASHBOARD_BOOKINGS_FAIL:
      return { loading: false, error: action.payload };
    case DASHBOARD_BOOKINGS_RESET:
      return {
        bookings: [],
      };

    default:
      return state;
  }
};
