import { Button, Row, Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import { connect } from "react-redux";
import { types } from '../store';

const Backend = ({backend, moveToFrontend, moveToFullstack}) => {
    return (
        <div style={{ background: '#f4f1f1', padding: '10px'}}>
            <Row>
            <h1>Backend Developer</h1>
            </Row>
            <Row className="justify-content-md-center">
                {
                backend.map(back => (
                <Col md="2">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Bill Gates"
                            src={back.image}
                        />
                        <Figure.Caption>
                            {back.nombre}
                        </Figure.Caption>
                        <p style={{textAlign: 'center', marginTop: '10px'}}>
                            <Button variant="primary" onClick={()=> moveToFrontend(back)}>Frontend</Button>{' '}
                            <Button variant="secondary" onClick={()=> moveToFullstack(back)}>Fullstack</Button>{' '}
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
    backend: state.backend
});
const mapDispatchToProps = dispatch => ({
    moveToFrontend(dev) {
        dispatch({
            type: types.MOVE_TO_FRONTEND,
            dev
        });
    },
    moveToFullstack(dev) {
        dispatch({
            type: types.MOVE_TO_FULLSTACK,
            dev
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Backend);