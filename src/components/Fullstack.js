import { Container, Row, Col, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import React, { useEffect, createRef } from "react";
import { connect } from "react-redux";
import { types } from '../store';

const Fullstack = ({fullstack, moveToFrontend, moveToBackend }) => {
    return (
        <div style={{ background: '#ddd', padding: '10px'}}>
            <Row>
            <h1>Full Stack Developer</h1>
            </Row>
            <Row className="justify-content-md-center">
                {
                fullstack.map(dev => (
                <Col md="2">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={dev.image}
                        />
                        <Figure.Caption>
                            {dev.nombre}
                        </Figure.Caption>
                        <p style={{textAlign: 'center', marginTop: '10px'}}>
                            <Button variant="primary" onClick={() => moveToFrontend(dev)}>Frontend</Button>{' '}
                            <Button variant="secondary" onClick={() => moveToBackend(dev)}>Backend</Button>{' '}
                        </p>
                    </Figure>
                </Col>
                ))
                }
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    fullstack: state.fullstack
})

const mapDispatchToProps = dispatch => ({
    moveToFrontend(dev){
        
        dispatch({
            type: types.MOVE_TO_FRONTEND,
            dev
        });
    },
    moveToBackend(dev){
        
        dispatch({
            type: types.MOVE_TO_BACKEND,
            dev
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Fullstack);