import { Row, Col } from "react-bootstrap";
import '../../../assets/styles/login.less'


export default function Input({...props}) {
    return(
        <Row md={5}>
            <Col md={2} className="text-md-right">
                {props.fieldName}</Col>
            <Col md={3} className="text-md-left">
                <input type={props.type}/></Col> 
        </Row>
    )}
