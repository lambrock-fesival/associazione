import { Col, Container, Row } from "react-bootstrap";
import { Navbar } from "../Navbar";

export default function PageTemplate({ children }) {
	return (
		<>
			<title>Associazione Lambrock Festival</title>
			<Navbar />
			<Container>
				<Row className="mt-4">
					<Col>{children}</Col>
				</Row>
			</Container>
		</>
	);
}
