import React from 'react'
import { Row, Col , Card, Button} from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  return (
    <Row className='ms-5' style={{marginTop:'100px'}}>
     { 
     data?.length>0?data.map((product,index)=>(
      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '18rem', height:'30rem' }}>
      <Card.Img height={'220px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title className='fw-bold' style={{height:'50px'}}>{product?.title} </Card.Title>
        <Card.Text>
        <p>{product?.description.slice(0,60)}... </p>
        <h5  style={{height:'30px', color:'beige'}}>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button className='btn btn-dark'><i className="fa-solid fa-heart text-danger "></i></Button>
          <Button className='btn btn-dark'><i className="fa-solid fa-cart-plus text-success"></i></Button>
  
        </div>
      </Card.Body>
    </Card>
      </Col>
     )): <p className='text-danger fw-bolder fs-4'>Nothing to display!</p>
     }
    </Row>
  )
}

export default Home