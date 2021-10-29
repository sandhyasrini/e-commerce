import { Row, Col } from "react-bootstrap";
import '../../../assets/styles/login.less'

export default function Header({...props}) {
    return(
        <Row className="justify-content-center">
        <Col>{props.heading}</Col>
        </Row>
    )}