import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// bootstrap imports
import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// component imports
import { Loader, Message } from 'components';
// action imports
import { dashboardGetBookings } from 'actions';

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
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings ? (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.name}</td>
                  <td>
                    <a href={`mailto:${booking.email}`}>{booking.email}</a>
                  </td>
                  <td>
                    {booking.isAdmin ? (
                      <i
                        style={{ color: 'green' }}
                        className='fas fa-check'
                      ></i>
                    ) : (
                      <i style={{ color: 'red' }} className='fas fa-times'></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/booking/${booking.id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => bookingDeleteHandler(booking.id)}
                    >
                      <i className='fas fa-trash'></i>
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
