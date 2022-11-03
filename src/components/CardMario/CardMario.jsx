import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardMario = (props) => {
  const {name} = props;

  return (
    <div className='p-2'>
      <Card>
        <Card.Img
          variant='top'
          className='w-100'
          src='https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/H2x1_SuperMario_Hub.jpg'
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='danger'>Leer más</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMario;
