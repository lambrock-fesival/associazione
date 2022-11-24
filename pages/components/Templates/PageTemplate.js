import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Wave } from "../Wave";

export default function PageTemplate({ children }) {
	return (
		<>
			<Head>
				<title>Associazione Lambrock Festival</title>
			</Head>
			<Wave />
			<Header />
			<Container>
				<Row>
					<Col>{children}</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
