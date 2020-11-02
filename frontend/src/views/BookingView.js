import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

// bootstrap imports
import { Row, Col, ListGroup, Card } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// fontawesome imports
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// component imports
import { Loader, Message } from 'components';
// action imports
import { getBookingContainer } from 'actions';
// util imports
import { numberFormat } from 'utils';

const BookingView = ({ history, match }) => {
  const bookingId = match.params.id;
  const dispatch = useDispatch();
  const bookingContainer = useSelector((state) => state.bookingContainer);
  const { loading, error, booking } = bookingContainer;
  const agentLogin = useSelector((state) => state.agentLogin);
  const { agentInfo } = agentLogin;

  // let addonsCost = booking.Addons.reduce((acc, item) => acc + item.cost, 0);
  // let subCost = booking.bookingCost + addonsCost;
  // let taxCost = 0.05 * subCost;
  // let totalCost = subCost + taxCost;
  // let addonsCost = booking.Addons.reduce((acc, item) => acc + item.price, 0);
  // let subCost = 0;
  // let taxCost = 0;
  // let totalCost = 0;

  useEffect(() => {
    if (agentInfo) {
      dispatch(getBookingContainer(bookingId));
    } else {
      history.push('/login');
    }
  }, [agentInfo, dispatch, bookingId, history]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1>Booking: {booking.id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2 className='mb-1'>Traveller</h2>
              <p className='mb-1'>
                <strong>Name:</strong>{' '}
                {`${booking.Traveller.fname} ${booking.Traveller.lname}`}
              </p>
              <p className='mb-1'>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${booking.Traveller.email}`}>
                  {booking.Traveller.email}
                </a>
              </p>
              <p className='mb-1'>
                <strong>Address:</strong> {booking.Traveller.addressLine1},{' '}
                {booking.Traveller.city} {booking.Traveller.provinceId},{' '}
                {booking.Traveller.countryId}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 className='mb-1'>Booking</h2>
              <p className='mb-1'>
                <strong>Destination:</strong> {booking.destLoc}
              </p>
              <p className='mb-1'>
                <strong>Date of Departure:</strong>{' '}
                {dayjs(booking.departDate).format('MMMM DD, YYYY')}
              </p>
              <p className='mb-1'>
                <strong>Cost:</strong>{' '}
                {numberFormat('cur-display', booking.bookingCost)}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Addons</h2>
              {booking.Addons.length > 0 ? (
                <ListGroup variant='flush'>
                  <Row>
                    <Col md={2}>Description</Col>
                    <Col>Cost</Col>
                  </Row>
                  {booking.Addons.map((addon, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2}>{addon.description}</Col>
                        <Col>{numberFormat('cur-display', addon.cost)}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Message>No addons</Message>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <h2>Booking Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Trip</Col>
                  <Col>{numberFormat('cur-display', booking.bookingCost)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Addons</Col>
                  <Col>
                    {booking.cost === 0
                      ? 'No Addons'
                      : numberFormat(
                          'cur-display',
                          booking.Addons.reduce(
                            (acc, item) => acc + item.cost,
                            0
                          )
                        )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>
                    {numberFormat(
                      'cur-display',
                      (booking.bookingCost +
                        booking.Addons.reduce(
                          (acc, item) => acc + item.cost,
                          0
                        )) *
                        0.05
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>
                    {numberFormat(
                      'cur-display',
                      (booking.bookingCost +
                        booking.Addons.reduce(
                          (acc, item) => acc + item.cost,
                          0
                        )) *
                        1.05
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export { BookingView };
