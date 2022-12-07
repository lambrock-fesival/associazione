import { SSRProvider } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ReactMarkdown from "react-markdown";
//import Sonnet from '../../components/Sonnet';

function Aside(pagesMD) {
    const md = pagesMD.children
    let items = AsideItems(md)
    let contents = AsideContents(md)
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {items}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        {contents}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Aside;

function AsideItems(pages) {
    let items = []
    let key
    pages.forEach((element, index) => {
        key = index.toString()
        items.push(

            <Nav.Item>
                <Nav.Link eventKey={key} className="mb-2">{element.pageName}</Nav.Link>
            </Nav.Item>

        )
    });
    return items
}

function AsideContents(pages) {
    let contents = []
    let key
    pages.forEach((element, index) => {
        key = index.toString()
        contents.push(

            <Tab.Pane eventKey={key}>
                <ReactMarkdown>{element.content}</ReactMarkdown>
            </Tab.Pane>

        )
    });
    return contents
}
