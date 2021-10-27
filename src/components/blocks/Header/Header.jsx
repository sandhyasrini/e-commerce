import { Container, Row, Col } from "react-bootstrap";
import { loginPage } from "../../../constants/app.constants";
import '../../../assets/styles/login.less'

export default function Header() {
    return(
<Container>
        <Row className="justify-content-center">
        <Col>{loginPage.heading}</Col>
        </Row>
        </Container>
        )}