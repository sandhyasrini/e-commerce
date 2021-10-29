import { Row, Col } from "react-bootstrap";
import '../../../assets/styles/login.less'


export default function Button({...props}) {
    return(
        <Row>
        <Col md={1} className="text-md-left">
        <button>{props.text}</button></Col>
        </Row>
    )}
