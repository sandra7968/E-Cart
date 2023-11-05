import React from 'react'
import { Row, Col , Card, Button} from 'react-bootstrap'

function Home() {
  return (
    <Row className='ms-5' style={{marginTop:'100px'}}>
      <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button className='btn btn-dark'><i className="fa-solid fa-heart text-danger "></i></Button>
          <Button className='btn btn-dark'><i className="fa-solid fa-cart-plus text-success"></i></Button>
  
        </div>
      </Card.Body>
    </Card>
      </Col>
    </Row>
  )
}

export default Home