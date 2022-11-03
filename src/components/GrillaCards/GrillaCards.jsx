import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardMario from '../CardMario/CardMario';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0];

const GrillaCards = () => {
  return (
    <Container className='my-4'>
      <Row>
        {array.map((el, index) => {
          return (
            <Col key={index} xs='12' md='4' lg='3'>
              <CardMario name={`Mario ${index}`} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default GrillaCards;
