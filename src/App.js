import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure'
import Fullstack from './components/Fullstack';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import store from "./store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Fullstack/>
        <Frontend/>
        <Backend/>
      </Container>
    </Provider>
  );
}

export default App;
