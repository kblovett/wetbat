import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

// bootstrap imports
import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// component imports
import { Loader, Message } from 'components';
// action imports
import { dashboardGetBookings } from 'actions';
// util imports
import { numberFormat } from 'utils';

const DashboardView = ({ history }) => {
  const dispatch = useDispatch();
  const dashboardBookings = useSelector((state) => state.dashboardBookings);
  const { loading, error, bookings } = dashboardBookings;
  const agentLogin = useSelector((state) => state.agentLogin);
  const { agentInfo } = agentLogin;

  useEffect(() => {
    if (agentInfo) {
      dispatch(dashboardGetBookings());
    } else {
      history.push('/login');
    }
  }, [agentInfo, dispatch, history]);

  const bookingDeleteHandler = (id) => {};

  return (
    <>
      <h1>Bookings</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>Agent</th>
              <th>Traveller</th>
              <th>Email</th>
              <th>Destination</th>
              <th>Date of Departure</th>
              <th>Passengers</th>
              <th>Booking Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings ? (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className='align-middle'>{`${booking.Agent.fname} ${booking.Agent.lname}`}</td>
                  <td className='align-middle'>{`${booking.Traveller.fname} ${booking.Traveller.lname}`}</td>
                  <td className='align-middle'>
                    <a href={`mailto:${booking.Traveller.email}`}>
                      {booking.Traveller.email}
                    </a>
                  </td>
                  <td className='align-middle'>{booking.destLoc}</td>
                  <td className='align-middle'>
                    {dayjs(booking.departDate).format('MMMM DD, YYYY')}
                  </td>
                  <td className='align-middle text-center'>
                    {booking.passengers}
                  </td>
                  <td className='align-middle text-center'>
                    {numberFormat('cur-display', booking.bookingCost)}
                  </td>
                  <td>
                    <LinkContainer to={`/bookings/${booking.id}`}>
                      <Button className='btn-sm btn-block'>
                        <FontAwesomeIcon icon={['fas', 'edit']} />
                      </Button>
                    </LinkContainer>
                    <Button
                      className='btn-sm btn-block btn-danger'
                      onClick={bookingDeleteHandler(booking.id)}
                    >
                      <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <Message variant='caution'>No bookings</Message>
            )}
          </tbody>
        </Table>
      )}
    </>
  );
};

export { DashboardView };
