import { Row, Col, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import { connect } from "react-redux";
import { types } from '../store';

const Frontend = ({frontend, moveToFullstack, moveToBackend}) => {
    return (
        <div style={{ background: '#eee', padding: '10px'}}>
            <Row>
            <h1>Frontend Developer</h1>
            </Row>
            <Row className="justify-content-md-center">
                {
                frontend.map(front => (
                <Col md="2">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={front.image}
                        />
                        <Figure.Caption>
                            {front.nombre}
                        </Figure.Caption>
                        <p style={{textAlign: 'center', marginTop: '10px'}}>
                            <Button variant="primary" onClick={() => moveToFullstack(front)}>Fullstack</Button>{' '}
                            <Button variant="secondary" onClick={() => moveToBackend(front)}>Backend</Button>{' '}
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
    frontend: state.frontend
});
const mapDispatchToProps = dispatch => ({
    moveToFullstack(dev) {
        dispatch({
            type: types.MOVE_TO_FULLSTACK,
            dev
        });
    },
    moveToBackend(dev) {
        dispatch({
            type: types.MOVE_TO_BACKEND,
            dev
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Frontend);