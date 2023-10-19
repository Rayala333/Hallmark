import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../Images/image.svg'
import Registration from './Registration';

const Main = () => {
  return (
    <Container>
        <Row >
            <Col xs={6}>
                <img src={Image} alt='regstration_Image' style={{width:"100%",height:"100vh"}}/>
            </Col>
            <Col xs={6}>
                <Registration />
            </Col>
        </Row>
    </Container>
  )
}

export default Main