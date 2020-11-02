import {
  BOOKING_CONTAINER_FAIL,
  BOOKING_CONTAINER_REQUEST,
  BOOKING_CONTAINER_RESET,
  BOOKING_CONTAINER_SUCCESS,
} from '../constants';

export const bookingContainerReducer = (
  state = { loading: true, Addons: [] },
  action
) => {
  switch (action.type) {
    case BOOKING_CONTAINER_REQUEST:
      return { ...state, loading: true };
    case BOOKING_CONTAINER_SUCCESS:
      return { loading: false, booking: action.payload };
    case BOOKING_CONTAINER_FAIL:
      return { loading: false, error: action.payload };
    case BOOKING_CONTAINER_RESET:
      return {
        booking: {},
      };

    default:
      return state;
  }
};
