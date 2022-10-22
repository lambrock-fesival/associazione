import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<Container>
			<Row>
				<Col>
					<p>This is the header</p>
				</Col>
			</Row>
		</Container>
	);
}
