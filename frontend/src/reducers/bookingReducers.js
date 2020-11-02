import {
  BOOKING_CONTAINER_FAIL,
  BOOKING_CONTAINER_REQUEST,
  BOOKING_CONTAINER_RESET,
  BOOKING_CONTAINER_SUCCESS,
} from '../constants';

export const bookingContainerReducer = (
  state = { bookingContainer: [] },
  action
) => {
  switch (action.type) {
    case BOOKING_CONTAINER_REQUEST:
      return { loading: true };
    case BOOKING_CONTAINER_SUCCESS:
      return { loading: false, bookingContainer: action.payload };
    case BOOKING_CONTAINER_FAIL:
      return { loading: false, error: action.payload };
    case BOOKING_CONTAINER_RESET:
      return {
        bookingContainer: [],
      };

    default:
      return state;
  }
};
